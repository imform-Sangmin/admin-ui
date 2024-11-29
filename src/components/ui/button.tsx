import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-gray-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient text-white hover:bg-gradient-dark disabled:bg-none",
        secondary1: "bg-secondary-7 text-white hover:bg-secondary-9",
        secondary2: "bg-secondary-4 text-white hover:bg-secondary-6",
        secondary3:
          "bg-secondary-2 text-secondary-7 hover:bg-secondary-4 disabled:text-white",
        outline:
          "border border-input border-1 border-secondary-3 bg-transparent text-secondary-6 hover:text-secondary-8 disabled:text-gray-4 disabled:border-gray-2 disabled:bg-transparent",
      },
      size: {
        default: "h-40 px-14 py-9 text-14 [&_svg]:h-16",
        sm: "h-32 rounded-md px-12 py-6 text-13 [&_svg]:h-16",
        lg: "h-48 rounded-md px-20 py-12 text-15 [&_svg]:h-20",
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
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
