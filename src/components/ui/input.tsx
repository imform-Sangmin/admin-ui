import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const InputVariants = cva(
  "flex text-base bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-4 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-gray-4 disabled:bg-gray-0 focus:border-primary-cyan",
  {
    variants: {
      variant: {
        default: "",
        active: "border-primary-cyan",
        complete: "",
        error: "border-states-red focus:border-states-red",
      },
      elSize: {
        default: "px-[1.6rem] py-[1.5rem]",
        sm: "px-[1.2rem] py-[0.9rem] text-md",
      },
    },
    defaultVariants: {
      variant: "default",
      elSize: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, elSize, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(InputVariants({ variant, elSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, InputVariants };
