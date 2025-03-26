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
import { useRouter } from "next/router";

const PaginationRender = ({
  totalPage,
  pageSize,
  className,
}: {
  totalPage: number;
  pageSize: number;
  className?: string;
}) => {
  const router = useRouter();
  const currentPage = router.query.page
    ? parseInt(router.query.page as string)
    : 1;

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem className="mr-[1.6rem]">
          <PaginationFirst href={`/?page=1`} />
          <PaginationPrevious href={`/?page=${currentPage - 1}`} />
        </PaginationItem>
        {Array.from({ length: pageSize }, (_, i) => {
          const page =
            pageSize * Math.floor((currentPage - 1) / pageSize) + i + 1;
          if (page > totalPage) return false;
          return (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={currentPage === page}
                href={`/?page=${page}`}
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
          <PaginationNext href={`/?page=${currentPage + 1}`} />
          <PaginationLast href={`/?page=${totalPage}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationRender;
