import * as React from "react";
import { cn } from "@/utils/cn";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  gap?: string; // e.g., "gap-4"
}

export const Form = ({ className, gap = "gap-4", ...props }: FormProps) => (
  <form className={cn("grid", gap, className)} {...props} />
);