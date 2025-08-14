// src/components/Field.tsx
import React from 'react';
import clsx from 'clsx';

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  scheme?: string;
  rounded?: string;
}

export const Field: React.FC<FieldProps> = ({
  scheme = 'gray',
  rounded = 'rounded-md',
  className,
  ...props
}) => {
  return (
    <input
      className={clsx(
        'border px-3 py-2 focus:outline-none focus:ring-2',
        `border-${scheme}-300 focus:ring-${scheme}-400`,
        rounded,
        className
      )}
      {...props}
    />
  );
};