import React from "react";

interface MotifProps {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

/**
 * Pinto Aceh (The Gate of Aceh)
 * Represents the entrance/gate of the Palace, symbolizing hospitality, protection, and nobility.
 */
export function PintoAceh({ className = "", size = 48, strokeWidth = 2 }: MotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-current ${className}`}
      aria-hidden="true"
    >
      {/* Outer Border Arch */}
      <path
        d="M20 85 V45 C20 28.431 33.431 15 50 15 C66.569 15 80 28.431 80 45 V85"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Door Arch */}
      <path
        d="M35 85 V55 C35 46.716 41.716 40 50 40 C58.716 40 65 46.716 65 55 V85"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base Foundation */}
      <path
        d="M10 85 H90"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18 91 H82"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Central Diamond/Heart Filigree */}
      <path
        d="M50 15 V40"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M50 20 L42 27 L50 34 L58 27 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Left and Right Hanging Accents */}
      <circle cx="28" cy="60" r="3" fill="currentColor" />
      <circle cx="72" cy="60" r="3" fill="currentColor" />
      {/* Upper Ornamental Star Nodes */}
      <circle cx="32" cy="30" r="2" fill="currentColor" />
      <circle cx="68" cy="30" r="2" fill="currentColor" />
      <circle cx="50" cy="27" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Bungong Jeumpa (Acehnese Jasmine Flower)
 * The iconic 5-petal flower representing natural beauty, purity, and culture.
 */
export function BungongJeumpa({ className = "", size = 48, strokeWidth = 2 }: MotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-current ${className}`}
      aria-hidden="true"
    >
      {/* Core Center Pistil */}
      <circle cx="60" cy="60" r="10" fill="currentColor" className="opacity-90" />
      <circle cx="60" cy="60" r="5" fill="#FAF6EE" />

      {/* Petal 1: Top (0 degrees) */}
      <path
        d="M60 50 C55 35, 52 15, 60 8 C68 15, 65 35, 60 50 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.05"
      />
      {/* Petal 2: Right-Top (72 degrees) */}
      <path
        d="M69.5 53.1 C82.8 45.4, 99.8 35.8, 104.2 42 C108.6 48.2, 92.5 61.2, 69.5 53.1 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.05"
      />
      {/* Petal 3: Right-Bottom (144 degrees) */}
      <path
        d="M65.9 65.9 C77.5 76.5, 91.5 94, 85.9 99 C80.3 104, 69.3 88, 65.9 65.9 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.05"
      />
      {/* Petal 4: Left-Bottom (216 degrees) */}
      <path
        d="M54.1 65.9 C50.7 88, 39.7 104, 34.1 99 C28.5 94, 42.5 76.5, 54.1 65.9 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.05"
      />
      {/* Petal 5: Left-Top (288 degrees) */}
      <path
        d="M50.5 53.1 C27.5 61.2, 11.4 48.2, 15.8 42 C20.2 35.8, 37.2 45.4, 50.5 53.1 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.05"
      />

      {/* Decorative inner details/leaf veins for each petal */}
      <line x1="60" y1="50" x2="60" y2="25" stroke="currentColor" strokeWidth={strokeWidth - 0.5} opacity="0.6" />
      <line x1="69.5" y1="53.1" x2="90" y2="44" stroke="currentColor" strokeWidth={strokeWidth - 0.5} opacity="0.6" />
      <line x1="65.9" y1="65.9" x2="79" y2="84" stroke="currentColor" strokeWidth={strokeWidth - 0.5} opacity="0.6" />
      <line x1="54.1" y1="65.9" x2="41" y2="84" stroke="currentColor" strokeWidth={strokeWidth - 0.5} opacity="0.6" />
      <line x1="50.5" y1="53.1" x2="30" y2="44" stroke="currentColor" strokeWidth={strokeWidth - 0.5} opacity="0.6" />
    </svg>
  );
}

/**
 * BaiturrahmanArch
 * Decorative frame element based on the multiloiled arch of Masjid Raya Baiturrahman.
 */
export function BaiturrahmanArch({ className = "", size = 64, strokeWidth = 2 }: MotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-current ${className}`}
      aria-hidden="true"
    >
      {/* Masjid Raya Baiturrahman Polylobed Archway Outline */}
      <path
        d="M10 80 V45 
           C10 38, 16 38, 22 38 
           C28 38, 28 28, 38 28 
           C43 28, 43 16, 50 16 
           C57 16, 57 28, 62 28 
           C72 28, 72 38, 78 38 
           C84 38, 90 38, 90 45 V80"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.03"
      />
      {/* Crescent and Star on Top of Arch */}
      <path
        d="M50 16 V8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M47 8 C47 5, 50.5 4, 53 6 C51.5 7, 51.5 9, 53 10 C50.5 12, 47 11, 47 8 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * OceanWave (Maritime Spice Route)
 * Smooth, elegant wave divider lines that symbolize the maritime legacy of Aceh as a crucial spice route hub.
 */
export function OceanWave({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 text-current"
      >
        <path
          d="M0 20 
             C 150 5, 150 35, 300 20 
             C 450 5, 450 35, 600 20 
             C 750 5, 750 35, 900 20 
             C 1050 5, 1050 35, 1200 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M0 25 
             C 150 13, 150 37, 300 25 
             C 450 13, 450 37, 600 25 
             C 750 13, 750 37, 900 25 
             C 1050 13, 1050 37, 1200 25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
