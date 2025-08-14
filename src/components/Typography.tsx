import * as React from "react";
import { cn } from "@/utils/cn";

export const H1 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl", className)} {...props} />
);
export const H2 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props} />
);
export const H3 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
);
export const H4 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
);
export const P = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
);
export const Lead = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-xl text-gray-600", className)} {...props} />
);
export const Muted = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-500", className)} {...props} />
);
export const Blockquote = ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote className={cn("mt-6 border-l-2 pl-6 italic text-gray-600", className)} {...props} />
);
export const Code = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <code className={cn("relative rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm", className)} {...props} />
);