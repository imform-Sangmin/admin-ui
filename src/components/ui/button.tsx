import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[1rem] whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:text-gray-4 disabled:bg-gray-0 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
          "bg-transparent text-secondary-6 hover:text-secondary-8 disabled:text-gray-4",
      },
      size: {
        default:
          "h-[5.6rem] rounded-md px-[2rem] py-[1.2rem] text-[1.6rem] [&_svg]:w-[2rem]",
        md: "h-[4.8rem] rounded-md px-[2rem] py-[1.2rem] text-[1.5rem] [&_svg]:w-[2rem]",
        sm: "h-[4rem] rounded-md px-[1.4rem] py-[0.9rem] text-[1.4rem] [&_svg]:w-[1.6rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
