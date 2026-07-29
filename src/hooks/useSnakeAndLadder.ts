import { useState, useCallback } from 'react';
import { playSound } from '@/lib/audio';

export const LADDERS: Record<number, number> = {
  2: 19,
  21: 40,
  28: 49,
  36: 64,
  44: 63,
  57: 76,
  69: 92,
};

export const SNAKES: Record<number, number> = {
  17: 5,
  30: 9,
  43: 22,
  51: 28,
  54: 26,
  62: 59,
  71: 50,
  81: 58,
  87: 47,
  93: 68,
  95: 86,
  99: 78,
};

export type GameStatus = 'setup' | 'playing' | 'finished';

export interface Notification {
  type: 'ladder' | 'snake' | 'win' | 'info';
  message: string;
}

export const useSnakeAndLadder = () => {
  const [numPlayers, setNumPlayers] = useState<number>(2);
  const [positions, setPositions] = useState<number[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [gameStatus, setGameStatus] = useState<GameStatus>('setup');
  const [notification, setNotification] = useState<Notification | null>(null);

  const startGame = (players: number) => {
    setNumPlayers(players);
    setPositions(Array(players).fill(1));
    setCurrentPlayer(0);
    setDiceValue(null);
    setGameStatus('playing');
    setNotification(null);
  };

  const nextTurn = useCallback(() => {
    setCurrentPlayer((prev) => (prev + 1) % numPlayers);
  }, [numPlayers]);

  const checkWinner = useCallback((pos: number): boolean => {
    return pos === 100;
  }, []);

  const updateSinglePlayerPosition = useCallback((newPos: number) => {
    setPositions((prev) => {
      const newPositions = [...prev];
      newPositions[currentPlayer] = newPos;
      return newPositions;
    });
  }, [currentPlayer]);

  const walkTo = useCallback((from: number, to: number, onComplete: () => void) => {
    setIsMoving(true);
    let tempPos = from;
    const step = to > from ? 1 : -1;
    
    const moveInterval = setInterval(() => {
      if (tempPos !== to) {
        tempPos += step;
        playSound('slide');
        updateSinglePlayerPosition(tempPos);
      } else {
        clearInterval(moveInterval);
        setIsMoving(false);
        onComplete();
      }
    }, 150);
  }, [updateSinglePlayerPosition]);

  const checkSnakeOrLadder = useCallback((pos: number) => {
    if (LADDERS[pos]) {
      playSound('win');
      setNotification({ type: 'ladder', message: 'Naik Tangga!' });
      walkTo(pos, LADDERS[pos], () => {
        setTimeout(() => setNotification(null), 2000);
        nextTurn();
      });
    } else if (SNAKES[pos]) {
      playSound('slide');
      setNotification({ type: 'snake', message: 'Digigit Ular!' });
      walkTo(pos, SNAKES[pos], () => {
        setTimeout(() => setNotification(null), 2000);
        nextTurn();
      });
    } else {
      nextTurn();
    }
  }, [nextTurn, walkTo]);

  const movePlayer = useCallback((dice: number) => {
    setIsMoving(true);
    const currentPos = positions[currentPlayer];
    
    // Logika Menang (Exact Landing)
    if (currentPos + dice > 100) {
      setNotification({ type: 'info', message: 'Harus pas mendarat di 100! Giliran hangus.' });
      setTimeout(() => {
        setNotification(null);
        setIsMoving(false);
        nextTurn();
      }, 2000);
      return;
    }

    const targetPos = currentPos + dice;
    let tempPos = currentPos;
    
    const moveInterval = setInterval(() => {
      if (tempPos < targetPos) {
        tempPos++;
        playSound('step');
        updateSinglePlayerPosition(tempPos);
      } else {
        clearInterval(moveInterval);
        setIsMoving(false);
        
        if (checkWinner(targetPos)) {
          playSound('win');
          setGameStatus('finished');
          setNotification({ type: 'win', message: 'Selamat! Anda Menang!' });
        } else {
          checkSnakeOrLadder(targetPos);
        }
      }
    }, 300);
  }, [positions, currentPlayer, updateSinglePlayerPosition, checkWinner, checkSnakeOrLadder, nextTurn]);

  const rollDice = useCallback(() => {
    if (isRolling || isMoving || gameStatus !== 'playing') return;
    setIsRolling(true);
    
    let rolls = 0;
    const interval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      playSound('roll');
      rolls++;
      if (rolls > 8) {
        clearInterval(interval);
        const finalDice = Math.floor(Math.random() * 6) + 1;
        setDiceValue(finalDice);
        setIsRolling(false);
        movePlayer(finalDice);
      }
    }, 100);
  }, [isRolling, isMoving, gameStatus, movePlayer]);

  const playAgain = () => {
    setGameStatus('setup');
  };

  return {
    gameStatus,
    numPlayers,
    positions,
    currentPlayer,
    diceValue,
    isRolling,
    isMoving,
    notification,
    startGame,
    rollDice,
    playAgain,
    LADDERS,
    SNAKES
  };
};
