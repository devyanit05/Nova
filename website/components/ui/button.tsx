import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-[-0.01em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C6CF2]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F7F5] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#7C6CF2] text-white shadow-[0_10px_30px_rgba(124,108,242,0.22)] hover:bg-[#6d5ee8] hover:shadow-[0_14px_36px_rgba(124,108,242,0.28)]",
        secondary:
          "border border-[#E5E7EB] bg-white text-[#1F2937] shadow-[0_6px_20px_rgba(31,41,55,0.04)] hover:border-[#d7dbe3] hover:bg-[#F8F7F5]",
        ghost: "text-[#6B7280] hover:text-[#1F2937] hover:bg-white/70",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-[15px]",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";
