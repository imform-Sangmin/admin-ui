import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const InputVariants = cva(
  "flex h-[5.6rem] w-full rounded-md border border-input bg-transparent pl-[1.6rem] py-[1.5rem] text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "",
        active: "",
        complete: "",
        error: "",
        disabled: "",
      },
      elSize: {
        default: "",
        sm: "",
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
