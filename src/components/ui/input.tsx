import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Icon } from "../Icons";

const InputVariants = cva(
  "peer flex text-base w-full bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-4 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-gray-4 disabled:bg-gray-0 focus:border-primary-cyan",
  {
    variants: {
      variant: {
        default: "",
        active: "border-primary-cyan",
        complete: "",
        error: "border-states-red focus:border-states-red",
      },
      elSize: {
        default: "pl-[1.6rem] pr-[2.4rem] h-[5.6rem]",
        sm: "pl-[1.2rem] pr-[1.6rem] h-[4rem] text-md",
      },
    },
    defaultVariants: {
      variant: "default",
      elSize: "default",
    },
  }
);

const InputClearButtonVariants = cva(
  "hidden absolute right-[.8rem] top-0 bottom-0 m-auto hover:after:content-none focus:block peer-focus:block",
  {
    variants: {
      variant: {
        default: "",
        active: "",
        complete: "",
        error: "",
      },
      size: {
        default: "",
        sm: "right-[.4rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  handleClear?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, elSize, type, handleClear = () => {}, ...props },
    ref
  ) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(InputVariants({ variant, elSize, className }))}
          ref={ref}
          {...props}
        />
        <Button
          variant={"ghost"}
          type="button"
          className={cn(
            InputClearButtonVariants({ variant, size: elSize }),
            props.value && "block"
          )}
          onClick={handleClear}
        >
          <Icon type={"closeCircle"} className="text-gray-4" />
        </Button>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, InputVariants };
