import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";
import { Icon } from "../Icons";
import { cva, VariantProps } from "class-variance-authority";

const CheckboxVariants = cva(
  "peer h-[1.8rem] w-[1.8rem] shrink-0 rounded-sm border border-secondary-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:bg-gray-1 data-[state=checked]:bg-primary-cyan data-[state=checked]:text-white data-[state=checked]:border-primary-cyan-dark [&_svg]:pointer-events-none [&_svg]:w-[1.6rem]",
  {
    variants: {
      size: {
        sm: "",
        xs: "bg-transparent border-none text-gray-1 disabled:bg-transparent disabled:text-gray-1 data-[state=checked]:bg-transparent data-[state=checked]:text-primary-cyan-dark",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof CheckboxVariants>
>(({ className, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(CheckboxVariants({ size, className }))}
    {...props}
  >
    {size === "xs" ? (
      <Icon type="check" />
    ) : (
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Icon type="check" />
      </CheckboxPrimitive.Indicator>
    )}
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
