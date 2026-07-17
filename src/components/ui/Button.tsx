import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "green" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  // Styles based on variables configured in globals.css
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-aceh transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 select-none shadow-soft";

  const variants = {
    primary:
      "glass-faded bg-primary/20 text-primary border-primary/30 hover:bg-primary/40 hover:border-primary/60 focus:ring-primary/40 hover:shadow-hover",
    gold:
      "glass-faded bg-accent-gold/20 text-[#997700] border-accent-gold/30 hover:bg-accent-gold/40 hover:border-accent-gold/60 focus:ring-accent-gold/40 hover:shadow-hover",
    green:
      "glass-faded bg-accent-green/20 text-accent-green border-accent-green/30 hover:bg-accent-green/40 hover:border-accent-green/60 focus:ring-accent-green/40 hover:shadow-hover",
    dark:
      "glass-faded bg-dark/20 text-dark border-dark/30 hover:bg-dark/40 hover:border-dark/60 focus:ring-dark/40 hover:shadow-hover",
    outline:
      "glass-faded bg-transparent border border-primary/50 text-primary hover:bg-primary/10 focus:ring-primary/40",
    ghost:
      "bg-transparent text-dark hover:bg-dark/5 shadow-none focus:ring-dark/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {!isLoading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
    </button>
  );
}
