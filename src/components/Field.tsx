import * as React from "react";
import { cn } from "@/utils/cn";

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  render?: (props: React.InputHTMLAttributes<HTMLInputElement>) => React.ReactNode; // custom control
  id?: string;
}

export const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ className, label, hint, error, id, render, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const describedBy = [hint ? `${inputId}-hint` : null, error ? `${inputId}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined;

    return (
      <div className={cn("grid gap-1", className)}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-gray-900">
            {label}
          </label>
        )}
        {render ? (
          render({ id: inputId, "aria-describedby": describedBy, className: cn("h-10 w-full rounded-xl border border-gray-300 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600", props.className) })
        ) : (
          <input
            ref={ref}
            id={inputId}
            aria-describedby={describedBy}
            className={cn(
              "h-10 w-full rounded-xl border border-gray-300 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
              error && "border-red-400 focus-visible:ring-red-500",
              props.disabled && "bg-gray-100 text-gray-500",
              props.className
            )}
            {...props}
          />
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-gray-500">
            {hint}
          </p>
        )}
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Field.displayName = "Field";