import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, leftIcon, rightIcon, className = "", id, ...props }, ref) => {
    const uniqueId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full flex flex-col gap-1.5 font-sans">
        {label && (
          <label htmlFor={uniqueId} className="text-sm font-semibold text-dark/80 pl-1">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-4 text-dark/40 pointer-events-none flex items-center justify-center">
              {leftIcon}
            </div>
          )}
          <input
            id={uniqueId}
            ref={ref}
            className={`w-full bg-[#FAF6EE]/50 hover:bg-[#FAF6EE] text-dark border-2 rounded-aceh px-4 py-3 text-base outline-none transition-all duration-300 shadow-soft
              ${leftIcon ? "pl-11" : ""} 
              ${rightIcon ? "pr-11" : ""}
              ${
                error
                  ? "border-primary focus:border-primary focus:ring-4 focus:ring-primary/10"
                  : "border-dark/10 focus:border-accent-green focus:ring-4 focus:ring-accent-green/10"
              }
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 text-dark/40 pointer-events-none flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && (
          <p className={`text-xs pl-1 ${error ? "text-primary font-semibold" : "text-dark/50"}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
