import React, { ElementType, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

interface BaseTypographyProps {
  as?: ElementType;
  scheme?: string;
  variant?: TypographyVariant;
}

export type TypographyProps<T extends ElementType> = BaseTypographyProps & Omit<ComponentPropsWithoutRef<T>, keyof BaseTypographyProps>;

export const Typography = <T extends ElementType = 'p'>({
  as,
  variant = 'p',
  scheme = 'gray',
  className,
  children,
  ...props
}: TypographyProps<T>) => {
  const Tag = (as || variant) as ElementType;
  const variantClasses: Record<TypographyVariant, string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    p: 'text-base',
    span: 'text-sm',
  };

  return (
    <Tag className={clsx(variantClasses[variant], `text-${scheme}-900`, className)} {...props}>
      {children}
    </Tag>
  );
};