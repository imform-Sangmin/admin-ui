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
import { useSearchParams } from "next/navigation";
import { columns, SplashTableData, SplashTableUpdateData } from "./columns";

const TableContainer = ({ data }: { data: SplashTableData[] }) => {
  const [tableData, setTableData] = useState<SplashTableData[]>(data);
  const tableRef = useRef<DataTableRef<SplashTableData>>(null);

  // const params = useSearchParams();
  // const search = params.get("search");

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
      setTableData(res);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="flex flex-col gap-[1.6rem] rounded-lg bg-white py-[1.6rem]">
      <div className="flex justify-between items-end pl-[2.4rem] pr-[4rem]">
        <p className="text-[1.6rem] font-bold">
          총 <span className="text-states-red">{tableData.length}</span>건
        </p>
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
      <DataTable
        data={tableData}
        columns={columns}
        ref={tableRef}
        onUpdateData={handleDataUpdate}
      />
    </div>
  );
};

export default TableContainer;
