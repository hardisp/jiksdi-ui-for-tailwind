
// src/components/Modal.tsx
import React from 'react';
import clsx from 'clsx';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  className,
  children,
  ...props
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={clsx('bg-white rounded-lg p-6 shadow-lg', className)} {...props}>
        {children}
      </div>
    </div>
  );
};
