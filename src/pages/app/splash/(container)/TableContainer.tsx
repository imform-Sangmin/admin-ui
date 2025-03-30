"use client";

import { useEffect, useRef, useState } from "react";
import DataTable, { DataTableRef } from "@/components/Table/data-table";
import { splashApi } from "@/lib/http/api";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { columns, SplashTableData, SplashTableUpdateData } from "./columns";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icons";

const TableContainer = ({ data }: { data: SplashTableData[] }) => {
  const [deletingRows, setDeletingRows] = useState<Set<string>>(new Set());
  const [tableData, setTableData] = useState<SplashTableData[]>(data);
  const tableRef = useRef<DataTableRef<SplashTableData>>(null);
  const [rowCount, setRowCount] = useState<number>(tableData.length);

  const handleFilterState = (value: string) => {
    if (value === "all") {
      tableRef.current?.table.setColumnFilters([]);
    } else {
      tableRef.current?.table.setColumnFilters([
        {
          id: "status",
          value: value === "active" ? true : false,
        },
      ]);
    }
  };

  const handleDataUpdate = async (id: string, data: SplashTableUpdateData) => {
    try {
      const res = await splashApi.updateSplash(id, data);
      if (res.success) {
        setTableData(res.data);
      } else {
        setTableData([]);
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleDataDelete = async (id: string) => {
    try {
      setDeletingRows((prev) => new Set([...prev, id]));
      const res = await splashApi.deleteSplash(id);
      setTableData(res);
    } catch (error) {
      console.error("Failed to delete status:", error);
    } finally {
      console.log(deletingRows);
      setDeletingRows((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  const handleDeleteSelected = () => {
    const selectedRows = tableRef.current?.table.getSelectedRowModel().rows;
    if (selectedRows) {
      selectedRows.forEach((row) => {
        handleDataDelete(row.original.id);
      });
      tableRef.current?.table.toggleAllPageRowsSelected(false);
    }
  };

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <div className="flex flex-col gap-[1.6rem] rounded-lg bg-white py-[1.6rem]">
      <div className="flex justify-between items-end pl-[2.4rem] pr-[4rem]">
        <p className="text-[1.6rem] font-bold">
          총 <span className="text-states-red">{rowCount}</span>건
        </p>
        <div className="flex gap-[.8rem]">
          <Button
            type="button"
            variant={"secondary2"}
            onClick={handleDeleteSelected}
            size={"sm"}
          >
            선택 삭제
            <Icon type="trash" />
          </Button>
          <Select
            onValueChange={(value) => {
              handleFilterState(value);
            }}
          >
            <SelectTrigger elSize={"sm"} className="min-w-[10rem]">
              <SelectValue placeholder="선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체</SelectItem>
              <SelectItem value="active">활성</SelectItem>
              <SelectItem value="inactive">비활성</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DataTable
        data={tableData}
        columns={columns}
        ref={tableRef}
        onUpdateData={handleDataUpdate}
        onDeleteData={handleDataDelete}
        onRowCountChange={setRowCount}
        state={{
          deletingRows,
        }}
      />
    </div>
  );
};

export default TableContainer;
