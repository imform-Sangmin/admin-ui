import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Icon } from "./Icons";

interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ChipVariants> {
  on?: boolean;
}

const ChipVariants = cva("font-medium", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      filter:
        "px-[1.6rem] py[.3rem] rounded-full text-md border border-secondary-2 text-secondary-7 bg-white data-[on=true]:bg-primary-cyan data-[on=true]:border-primary-cyan data-[on=true]:text-white",
      option:
        "inline-flex items-center gap-[.8rem] pl-[1.2rem] pr-[.6rem] h-[2.8rem] rounded-sm text-sm bg-gray-1 text-gray-9 data-[on=true]:bg-secondary-8 data-[on=true]:text-white",
      answer:
        "px-[1.2rem] py-[.4rem] rounded-full text-sm border border-gray-1 bg-gray-0 text-gray-3 data-[on=true]:border-[#AEEFC6] data-[on=true]:text-[#28d366] data-[on=true]:bg-[#E5FAED]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, variant, children, on, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(ChipVariants({ variant, className }))}
        ref={ref}
        data-on={on}
        {...props}
      >
        {children}
        {variant === "option" && <Icon type="close" size={"sm"} />}
      </button>
    );
  }
);
Chip.displayName = "Chip";
export default Chip;
