import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex flex-col gap-[1.2rem]", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItemVariants = cva(
  "aspect-square h-[2.4rem] w-[2.4rem] rounded-full border border-gray-2 bg-white focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:bg-gray-1 data-[state=checked]:bg-primary-cyan-dark [&_.group-indicator-check]:rounded-full [&_.group-indicator-check]:bg-white [&_.group-indicator-check]:border-none",
  {
    variants: {
      variant: {
        default: "",
        error: "border-states-red data-[state=checked]:bg-states-red",
      },
      size: {
        default:
          "[&_.group-indicator-check]:h-[1.2rem] [&_.group-indicator-check]:w-[1.2rem]",
        sm: "h-[2rem] w-[2rem] [&_.group-indicator-check]:h-[.8rem] [&_.group-indicator-check]:w-[.8rem]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof RadioGroupItemVariants>
>(({ className, size, variant, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(RadioGroupItemVariants({ size, variant, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="group-indicator-check"></div>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
