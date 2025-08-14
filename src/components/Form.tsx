import React from 'react';

export const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ children, ...props }) => {
  return <form className="space-y-4" {...props}>{children}</form>;
};
