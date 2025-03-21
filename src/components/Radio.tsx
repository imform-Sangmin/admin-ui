import { cva, VariantProps } from "class-variance-authority";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { cn } from "@/lib/utils";

const RadioVariants = cva(
  "flex items-center gap-[.8rem] [&_span]:text-gray-7",
  {
    variants: {
      variant: {
        default: "",
        error: "[&_span]:text-states-red",
      },
      size: {
        default: "text-base",
        sm: "text-md gap-[.6rem]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface RadioPropsType {
  options: { label: string; value: string }[];
  disabled?: boolean;
}

type RadioProps = RadioPropsType & VariantProps<typeof RadioVariants>;

const Radio = ({ options, size, variant, disabled, ...props }: RadioProps) => {
  return (
    <RadioGroup disabled={disabled} {...props}>
      {options.map((option) => (
        <div
          className={cn(RadioVariants({ size, variant }))}
          key={option.value}
        >
          <RadioGroupItem size={size} variant={variant} value={option.value} />
          <span>{option.label}</span>
        </div>
      ))}
    </RadioGroup>
  );
};

export default Radio;
