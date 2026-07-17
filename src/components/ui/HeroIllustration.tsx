import React from "react";

interface IllustrationProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Baiturrahman Mosque Silhouette
 * Domes and minarets of the historic Masjid Raya Baiturrahman.
 */
export function BaiturrahmanSilhouette({ className = "", style }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 800 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto text-current ${className}`}
      style={style}
    >
      {/* Central Dome */}
      <path
        d="M340 250 V180 
           C340 130, 365 110, 400 110 
           C435 110, 460 130, 460 180 V250"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Central Dome Minaret Peak */}
      <path
        d="M400 110 V80"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M395 80 C395 76, 405 76, 405 80 C405 84, 395 84, 395 80 Z"
        fill="currentColor"
      />
      {/* Crescent Moon on central dome */}
      <path
        d="M397 74 C397 71, 400 70, 402 72 C400.5 73, 400.5 75, 402 76 C400 78, 397 77, 397 74 Z"
        fill="currentColor"
      />

      {/* Left Flanking Dome */}
      <path
        d="M230 250 V195 
           C230 160, 250 145, 275 145 
           C300 145, 320 160, 320 195 V250"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M275 145 V125"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="275" cy="123" r="3" fill="currentColor" />

      {/* Right Flanking Dome */}
      <path
        d="M480 250 V195 
           C480 160, 500 145, 525 145 
           C550 145, 570 160, 570 195 V250"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M525 145 V125"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="525" cy="123" r="3" fill="currentColor" />

      {/* Left Tower Minaret */}
      <path
        d="M140 250 H180 V100 H140 Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M135 100 H185 V90 H135 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M145 90 L160 65 L175 90 Z"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Right Tower Minaret */}
      <path
        d="M620 250 H660 V100 H620 Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M615 100 H665 V90 H615 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M625 90 L640 65 L655 90 Z"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Polylobed Arch Gate overlays in front of the domes */}
      <path
        d="M290 250 V210 C290 200, 300 200, 310 200 C320 200, 320 190, 330 190 C340 190, 345 180, 355 180 C365 180, 365 190, 375 190 C385 190, 385 200, 395 200 C405 200, 415 200, 415 210 V250"
        stroke="#FAF6EE"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M200 250 H600"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Rumoh Aceh Silhouette
 * High stilt wood pillars and the steep roof lines.
 */
export function RumohAcehSilhouette({ className = "", style }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 500 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto text-current ${className}`}
      style={style}
    >
      {/* Roof outline */}
      <path
        d="M100 130 L250 40 L400 130 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Crossing ornamental poles at roof peak (Seumuleung) */}
      <path
        d="M240 45 L225 20"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M260 45 L275 20"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Main Living Area Body */}
      <path
        d="M120 130 H380 V175 H120 Z"
        fill="currentColor"
        opacity="0.85"
      />

      {/* Windows slots */}
      <rect x="150" y="142" width="20" height="15" fill="#FAF6EE" opacity="0.9" rx="2" />
      <rect x="240" y="142" width="20" height="15" fill="#FAF6EE" opacity="0.9" rx="2" />
      <rect x="330" y="142" width="20" height="15" fill="#FAF6EE" opacity="0.9" rx="2" />

      {/* Stilt Wood Pillars */}
      {/* Row of pillars */}
      <rect x="130" y="175" width="8" height="65" fill="currentColor" opacity="0.9" />
      <rect x="170" y="175" width="8" height="65" fill="currentColor" opacity="0.9" />
      <rect x="210" y="175" width="8" height="65" fill="currentColor" opacity="0.9" />
      <rect x="250" y="175" width="8" height="65" fill="currentColor" opacity="0.9" />
      <rect x="290" y="175" width="8" height="65" fill="currentColor" opacity="0.9" />
      <rect x="330" y="175" width="8" height="65" fill="currentColor" opacity="0.9" />
      <rect x="362" y="175" width="8" height="65" fill="currentColor" opacity="0.9" />

      {/* Staircase (Seulangke) */}
      <path
        d="M230 240 L210 175 H222 L242 240 Z"
        fill="currentColor"
        opacity="0.95"
      />
      <line x1="225" y1="225" x2="235" y2="225" stroke="#FAF6EE" strokeWidth="2.5" />
      <line x1="220" y1="210" x2="230" y2="210" stroke="#FAF6EE" strokeWidth="2.5" />
      <line x1="215" y1="195" x2="225" y2="195" stroke="#FAF6EE" strokeWidth="2.5" />
      <line x1="210" y1="180" x2="220" y2="180" stroke="#FAF6EE" strokeWidth="2.5" />

      {/* Base platform line */}
      <line x1="80" y1="240" x2="420" y2="240" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Spice Route Ship (Kapal Jalur Rempah)
 * Multi-sailed traditional merchant boat sailing on sea waves.
 */
export function SpiceRouteShip({ className = "", style }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto text-current ${className}`}
      style={style}
    >
      {/* Ship Hull (Body) */}
      <path
        d="M70 170 
           C110 185, 270 185, 330 170 
           L300 205 H100 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Hull markings */}
      <path
        d="M90 180 H310"
        stroke="#FAF6EE"
        strokeWidth="2.5"
        opacity="0.8"
      />

      {/* Main Mast (Vertical pole) */}
      <rect x="180" y="30" width="6" height="145" fill="currentColor" />
      <rect x="250" y="55" width="5" height="120" fill="currentColor" />

      {/* Sails (Left Mast) */}
      <path
        d="M176 40 
           C130 50, 100 80, 95 140 
           C130 120, 160 110, 176 110 Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M176 110 
           C140 120, 120 135, 115 165 
           C140 155, 160 150, 176 150 Z"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Sails (Right Mast) */}
      <path
        d="M246 65 
           C210 75, 190 95, 185 145 
           C210 130, 230 125, 246 125 Z"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Flags on mast peaks */}
      <path d="M186 30 L205 37 L186 42 Z" fill="#C1121F" />
      <path d="M255 55 L270 61 L255 66 Z" fill="#F2C94C" />

      {/* Wave details at the bottom of the hull */}
      <path
        d="M40 200 
           C 120 185, 180 215, 260 200 
           C 310 190, 340 210, 360 200"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M60 210 
           C 140 198, 200 222, 280 210"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

/**
 * Modern Students (Mahasiswa dan Pelajar)
 * Minimalist, stylized illustration of a male and female student studying together.
 */
export function StudentAvatars({ className = "", style }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 500 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto text-current ${className}`}
      style={style}
    >
      {/* Student 1: Female on the Left with Hijab (Islamic context) */}
      {/* Body / Torso */}
      <path
        d="M100 350 C100 290, 130 260, 180 260 C230 260, 260 290, 260 350 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Hijab outline */}
      <path
        d="M140 250 C140 180, 220 180, 220 250 C220 275, 200 290, 180 290 C160 290, 140 275, 140 250 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Face oval */}
      <ellipse cx="180" cy="245" rx="20" ry="25" fill="#FAF6EE" />
      {/* Closed eyes of focus/study */}
      <path d="M168 245 Q173 249, 175 245" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M185 245 Q190 249, 192 245" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Smile */}
      <path d="M175 258 Q180 262, 185 258" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Book held by Student 1 */}
      <path
        d="M140 310 L180 280 L220 310 L200 340 H160 Z"
        fill="currentColor"
        opacity="0.9"
        stroke="#FAF6EE"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Student 2: Male on the Right (Peçi Cap / Modern haircut silhouette) */}
      {/* Body / Torso */}
      <path
        d="M240 350 C240 285, 275 250, 335 250 C395 250, 430 285, 430 350 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Neck */}
      <rect x="325" y="225" width="20" height="30" fill="currentColor" opacity="0.9" />
      {/* Face oval */}
      <ellipse cx="335" cy="210" rx="24" ry="28" fill="#FAF6EE" />
      {/* Traditional black cap (Kopiah/Peci) representing Acehnese student */}
      <path
        d="M309 195 C309 180, 361 180, 361 195 Z"
        fill="currentColor"
      />
      {/* Closed eyes of focus/study */}
      <path d="M320 210 Q325 214, 327 210" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M343 210 Q348 214, 350 210" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Smile */}
      <path d="M330 223 Q335 227, 340 223" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Laptop / Book in front of Student 2 */}
      <path
        d="M300 335 L335 295 L370 335 Z"
        fill="currentColor"
        opacity="0.8"
        stroke="#FAF6EE"
        strokeWidth="2.5"
      />
    </svg>
  );
}

/**
 * Drifting Petals (Kelopak Bungong Jeumpa)
 * Floats as absolute overlays.
 */
export function PetalDrifter({ className = "", style }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 text-current ${className}`}
      style={style}
    >
      <path
        d="M50 85 C15 75, 10 35, 50 15 C90 35, 85 75, 50 85 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line x1="50" y1="85" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}
