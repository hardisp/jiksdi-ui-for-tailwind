import * as React from "react";
import { cn } from "@/utils/cn";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  closeOnOverlay?: boolean;
  ariaTitle?: string;
}

export const Modal = ({
  open,
  onOpenChange,
  closeOnOverlay = true,
  ariaTitle = "Dialog",
  className,
  children,
  ...props
}: ModalProps) => {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-label={ariaTitle}
      {...props}
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => closeOnOverlay && onOpenChange(false)}
      />
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
};

export const ModalHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("mb-2", className)} {...props} />
);
export const ModalTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={cn("text-xl font-semibold", className)} {...props} />
);
export const ModalDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, ...props }) => (
  <p className={cn("text-sm text-gray-500", className)} {...props} />
);
export const ModalFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("mt-6 flex justify-end gap-2", className)} {...props} />
);