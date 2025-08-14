
// src/components/Card.tsx
import React from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  scheme?: string;
  variant?: 'solid' | 'outline';
  rounded?: string;
  padding?: string;
}

export const Card: React.FC<CardProps> = ({
  scheme = 'gray',
  variant = 'solid',
  rounded = 'rounded-lg',
  padding = 'p-4',
  className,
  ...props
}) => {
  const variantClasses = {
    solid: `bg-${scheme}-50 text-${scheme}-900`,
    outline: `border border-${scheme}-200 bg-white text-${scheme}-900`,
  };

  return <div className={clsx(rounded, padding, variantClasses[variant], className)} {...props} />;
};

