import { Table } from "@tanstack/react-table";
import PaginationRender from "@/components/PaginationRender";

interface TablePaginationProps<TData> {
  table: Table<TData>;
  pageCount: number;
}

export function TablePagination<TData>({
  table,
  pageCount,
}: TablePaginationProps<TData>) {
  const { pageIndex } = table.getState().pagination;

  const handlePageChange = (page: number) => {
    table.setPageIndex(page - 1);
    table.initialState.pagination.pageIndex = page - 1;
  };

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <PaginationRender
          totalPage={pageCount}
          pageSize={5}
          className="mt-0"
          onPageChange={handlePageChange}
          currentPage={pageIndex + 1}
        />
      </div>
    </div>
  );
}
