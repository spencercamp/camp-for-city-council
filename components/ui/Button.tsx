"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-red text-white hover:bg-red-dark focus:ring-red shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-white text-white hover:bg-white hover:text-navy focus:ring-white",
        outlineDark:
          "border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy",
        ghost:
          "text-navy hover:bg-navy/10 focus:ring-navy",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
