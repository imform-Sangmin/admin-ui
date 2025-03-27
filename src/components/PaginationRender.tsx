import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface PaginationRenderProps {
  totalPage: number;
  pageSize: number;
  className?: string;
  onPageChange?: (page: number) => void;
  currentPage?: number;
}

const PaginationRender = ({
  totalPage,
  pageSize,
  className,
  onPageChange,
  currentPage = 1,
}: PaginationRenderProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ) => {
    e.preventDefault();
    onPageChange?.(page);
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem className="mr-[1.6rem]">
          <PaginationFirst href="#" onClick={(e) => handleClick(e, 1)} />
          <PaginationPrevious
            href="#"
            onClick={(e) => handleClick(e, Math.max(1, currentPage - 1))}
          />
        </PaginationItem>
        {Array.from({ length: pageSize }, (_, i) => {
          const page =
            pageSize * Math.floor((currentPage - 1) / pageSize) + i + 1;
          if (page > totalPage) return false;
          return (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={(e) => handleClick(e, page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {totalPage > pageSize &&
          pageSize * Math.floor((currentPage - 1) / pageSize) + pageSize <
            totalPage && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
        <PaginationItem className="ml-[1.6rem]">
          <PaginationNext
            href="#"
            onClick={(e) =>
              handleClick(e, Math.min(totalPage, currentPage + 1))
            }
          />
          <PaginationLast href="#" onClick={(e) => handleClick(e, totalPage)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationRender;
