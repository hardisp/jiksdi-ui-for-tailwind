// src/components/Button.tsx
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  scheme?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  rounded?: string;
}

export const Button: React.FC<ButtonProps> = ({
  scheme = 'primary',
  variant = 'solid',
  size = 'md',
  rounded = 'rounded-lg',
  className,
  ...props
}) => {
  const baseStyles = `${rounded} font-medium focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:pointer-events-none`;

  const variantClasses = {
    solid: `bg-${scheme}-500 text-white hover:bg-${scheme}-600 focus:ring-${scheme}-400`,
    outline: `border border-${scheme}-500 text-${scheme}-500 hover:bg-${scheme}-50 focus:ring-${scheme}-400`,
    ghost: `bg-transparent text-${scheme}-500 hover:bg-${scheme}-50 focus:ring-${scheme}-400`,
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  return (
    <button
      className={clsx(baseStyles, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    />
  );
};
