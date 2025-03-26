import { MenuList } from "@/consts/MenuList";
import { cva, VariantProps } from "class-variance-authority";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const TitleVariants = cva("title my-[3.2rem]", {
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
  children?: ReactNode;
}

export const Title = ({ className, children, ...props }: TitleProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const title =
    pathNames.length > 1
      ? MenuList[pathNames[0]].sub?.find((sub) => sub.url === paths)?.title
      : MenuList[pathNames[0]].title;

  return (
    <div className={TitleVariants({ className })} {...props}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
