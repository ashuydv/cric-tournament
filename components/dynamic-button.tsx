"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ReactNode, useState, useEffect } from "react";

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
  rightIcon = <ChevronRight size={18} />,
  leftIcon,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Create pulse animation effect every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 700);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Define variant-specific styles
  const variantStyles = {
    primary: `
      bg-orange-500 hover:bg-orange-600 
      text-white
    `,
    secondary: `
      bg-blue-600 hover:bg-blue-700 
      text-white
    `,
    tertiary: `
      bg-green-600 hover:bg-green-700 
      text-white
    `,
    outline: `
      bg-transparent hover:bg-orange-50 
      text-orange-500 border-2 border-orange-500
    `,
    ghost: `
      bg-transparent hover:bg-gray-100 
      text-gray-800 shadow-none
    `,
  };

  // Base button styles - simplified and cleaner
  const baseStyles = `
    font-medium px-8 py-6 
    transition-all duration-300 text-base
    shadow-lg
    flex items-center gap-2 rounded-xl
    italic uppercase
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
  `;

  // The button component
  const ButtonContent = () => (
    <Button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon && (
        <span className="flex items-center justify-center">{leftIcon}</span>
      )}
      <span className="font-semibold">{children}</span>
      {rightIcon && (
        <span className="flex items-center justify-center">{rightIcon}</span>
      )}
    </Button>
  );

  // If href is provided, wrap with Link
  if (href && !disabled) {
    return (
      <div className="relative inline-block group">
        <Link href={href}>
          <ButtonContent />
        </Link>
      </div>
    );
  }

  // Otherwise, return just the button
  return (
    <div className="relative inline-block group">
      <ButtonContent />
    </div>
  );
};

export default DynamicButton;
