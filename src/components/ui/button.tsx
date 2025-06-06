import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[1rem] whitespace-nowrap rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:text-gray-4 disabled:bg-gray-0 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient text-white hover:bg-gradient-dark disabled:bg-none leading-[1.65]",
        secondary1: "bg-secondary-7 text-white hover:bg-secondary-9",
        secondary2: "bg-secondary-4 text-white hover:bg-secondary-6",
        secondary3:
          "bg-secondary-2 text-secondary-7 hover:bg-secondary-4 disabled:text-white",
        outline:
          "border border-input border-[1px] border-secondary-3 bg-transparent text-secondary-6 hover:text-secondary-8 disabled:text-gray-4 disabled:border-gray-2 disabled:bg-transparent",
        ghost:
          "relative bg-transparent text-secondary-8 hover:after:content-[''] hover:after:inline-block hover:after:absolute hover:after:inset-x-0 hover:after:bottom-[-.2rem] hover:after:w-full hover:after:bg-secondary-8 hover:after:h-[0.2rem] disabled:text-gray-4",
        datePicker:
          "border border-input border-[1px] border-secondary-3 bg-white min-w-[32.3rem] box-border px-[1.1rem] py-[1.6rem] justify-between text-gray-9",
      },
      size: {
        xl: "rounded-md px-[2rem] h-[5.6rem] text-[1.6rem] [&_svg]:w-[2.4rem]",
        lg: "rounded-sm px-[2rem] h-[4.8rem] text-[1.5rem] [&_svg]:w-[2rem]",
        md: "rounded-sm px-[1.4rem] h-[4rem] text-[1.4rem] [&_svg]:w-[1.6rem]",
        sm: "rounded-sm px-[1.2rem] h-[3.2rem] text-[1.3rem] [&_svg]:w-[1.6rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          variant === "ghost" && "rounded-none py-0 px-0"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
