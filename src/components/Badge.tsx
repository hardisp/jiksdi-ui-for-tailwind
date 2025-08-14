import React from 'react';
import clsx from 'clsx';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  scheme?: string;
  variant?: 'solid' | 'outline';
  rounded?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  scheme = 'primary',
  variant = 'solid',
  rounded = 'rounded-full',
  className,
  ...props
}) => {
  const variantClasses = {
    solid: `bg-${scheme}-500 text-white`,
    outline: `border border-${scheme}-500 text-${scheme}-500`,
  };

  return <span className={clsx('px-2 py-0.5 text-xs font-medium', rounded, variantClasses[variant], className)} {...props} />;
};
