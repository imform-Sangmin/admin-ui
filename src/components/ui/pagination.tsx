import * as React from "react";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";
import { Icon } from "../Icons";
import { cva } from "class-variance-authority";
import Link from "next/link";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-[.4rem]", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("flex items-center justify-center", className)}
    {...props}
  />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<typeof Link>;

const PaginationVariants = cva(
  "inline-flex items-center justify-center gap-[1rem] w-[3.2rem] h-[3.2rem] whitespace-nowrap rounded-md font-medium text-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:text-gray-4 disabled:bg-gray-0",
  {
    variants: {
      variant: {
        default: "hover:bg-gray-2",
        active: "bg-gray-9 text-white",
      },
    },
  }
);

const PaginationLink = ({
  className,
  isActive,
  href,
  ...props
}: PaginationLinkProps) => (
  <Link
    href={href}
    aria-current={isActive ? "page" : undefined}
    className={cn(
      PaginationVariants({
        variant: isActive ? "active" : "default",
      }),
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("p-0", className)}
    {...props}
  >
    <Icon type="arrowLeft" size={"lg"} />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationFirst = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to first page"
    size="default"
    className={cn("p-0", className)}
    {...props}
  >
    <Icon type="arrowFirst" size={"lg"} />
  </PaginationLink>
);
PaginationFirst.displayName = "PaginationFirst";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("p-0", className)}
    {...props}
  >
    <Icon type="arrowRight" size={"lg"} />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationLast = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to last page"
    size="default"
    className={cn("p-0", className)}
    {...props}
  >
    <Icon type="arrowLast" size={"lg"} />
  </PaginationLink>
);
PaginationLast.displayName = "PaginationLast";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationFirst,
  PaginationNext,
  PaginationLast,
  PaginationEllipsis,
};
