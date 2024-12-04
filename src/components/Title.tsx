import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const TitleVariants = cva("px-56 title my-32", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface TitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TitleVariants> {
  children: ReactNode;
}

export const Title = ({ className, children, ...props }: TitleProps) => {
  return (
    <div className={TitleVariants({ className })} {...props}>
      {children}
    </div>
  );
};
