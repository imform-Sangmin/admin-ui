import { Table } from "@tanstack/react-table";
import PaginationRender from "@/components/PaginationRender";
import { useEffect } from "react";

interface TablePaginationProps<TData> {
  table: Table<TData>;
  pageCount: number;
}

export function TablePagination<TData>({
  table,
  pageCount,
}: TablePaginationProps<TData>) {
  const { pageIndex, pageSize } = table.getState().pagination;
  const currentData = table.getFilteredRowModel().rows;

  // 데이터 변경 시 페이지네이션 상태 체크 및 조정
  useEffect(() => {
    const totalPages = Math.ceil(currentData.length / pageSize);

    // 현재 페이지가 유효하지 않은 경우 (마지막 페이지보다 큰 경우)
    if (pageIndex >= totalPages && totalPages > 0) {
      // 마지막 페이지로 이동
      const newPageIndex = Math.max(0, totalPages - 1);
      table.setPagination({
        pageIndex: newPageIndex,
        pageSize,
      });
    }
  }, [currentData.length, pageIndex, pageSize, table]);

  const handlePageChange = (page: number) => {
    const safePageIndex = Math.min(Math.max(0, page - 1), pageCount - 1);
    table.setPagination({
      pageIndex: safePageIndex,
      pageSize,
    });
    // table.setPageIndex(page - 1);
    // table.initialState.pagination.pageIndex = page - 1;
  };

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        {pageCount > 0 && (
          <PaginationRender
            totalPage={pageCount}
            pageSize={pageSize}
            className="mt-0"
            onPageChange={handlePageChange}
            currentPage={pageIndex + 1}
          />
        )}
      </div>
    </div>
  );
}
