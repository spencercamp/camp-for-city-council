"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-red text-white shadow-[0_10px_28px_-10px_rgba(230,57,70,0.55)] hover:bg-red-dark hover:shadow-[0_14px_32px_-10px_rgba(230,57,70,0.7)] hover:-translate-y-0.5 focus-visible:ring-red",
        outline:
          "border border-white/70 text-white hover:bg-white hover:text-blue-dark focus-visible:ring-white/50",
        outlineDark:
          "border border-blue/70 text-blue-dark hover:bg-blue-dark hover:text-white hover:border-blue-dark focus-visible:ring-blue/40",
        ghost:
          "text-blue hover:bg-blue/8 focus-visible:ring-blue/30",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-[15px]",
        lg: "px-8 py-3.5 text-base",
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
