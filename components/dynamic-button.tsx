"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const DynamicButton = ({
  children,
  href,
  variant = "primary",
  rightIcon = (
    <ChevronRight size={18} className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" />
  ),
  leftIcon,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) => {
  // Define variant-specific styles
  const variantStyles = {
    primary: `
            bg-orange-500 hover:bg-orange-600 active:bg-orange-700
            text-white
        `,
    secondary: `
            bg-blue-600 hover:bg-blue-700 active:bg-blue-800
            text-white
        `,
    tertiary: `
            bg-green-600 hover:bg-green-700 active:bg-green-800
            text-white
        `,
    outline: `
            bg-transparent hover:bg-orange-50 active:bg-orange-100
            text-orange-500 border-2 border-orange-500
        `,
    ghost: `
            bg-transparent hover:bg-gray-100 active:bg-gray-200
            text-gray-800 shadow-none
        `,
  };

  // Base button styles that apply to all variants - Enhanced responsive design
  const baseStyles = `
        font-medium 
        px-4 xs:px-6 sm:px-8 md:px-10
        py-3 xs:py-4 sm:py-5 md:py-6
        transition-all duration-300 
        text-sm xs:text-base sm:text-lg md:text-xl
        flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3
        rounded-lg xs:rounded-xl sm:rounded-2xl
        italic uppercase
        font-semibold xs:font-bold
        min-h-[44px] xs:min-h-[48px] sm:min-h-[56px] md:min-h-[64px]
        w-full sm:w-auto
        leading-tight
        tracking-wide xs:tracking-wider
        transform hover:scale-105 active:scale-95
        touch-manipulation
        ${
          disabled
            ? "opacity-50 cursor-not-allowed pointer-events-none hover:scale-100"
            : ""
        }
    `;

  // The button component
  const ButtonContent = () => (
    <Button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon && (
        <span className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          {leftIcon}
        </span>
      )}
      <span className="flex-1 text-center sm:flex-initial whitespace-nowrap overflow-hidden text-ellipsis">
        {children}
      </span>
      {rightIcon && (
        <span className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          {rightIcon}
        </span>
      )}
    </Button>
  );

  // If href is provided, wrap with Link
  if (href && !disabled) {
    return (
      <div className="relative group w-full sm:inline-block sm:w-auto">
        <Link href={href} className="block w-full sm:inline-block sm:w-auto">
          <ButtonContent />
        </Link>

        {/* Enhanced glow effect for different screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg xs:rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm xs:blur-md"></div>
      </div>
    );
  }

  // Otherwise, return just the button
  return (
    <div className="relative group w-full sm:inline-block sm:w-auto">
      <ButtonContent />

      {/* Enhanced glow effect for different screen sizes */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg xs:rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm xs:blur-md"></div>
    </div>
  );
};

export default DynamicButton;
