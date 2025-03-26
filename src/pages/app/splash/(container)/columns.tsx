"use client";

import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ColumnDef } from "@tanstack/react-table";

export type SplashTableData = {
  id: string;
  email: string;
  status: boolean;
  amount: number;
};

export const columns: ColumnDef<SplashTableData>[] = [
  {
    accessorKey: "index",
    header: () => <div>NO</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
  },
  {
    accessorKey: "email",
    header: () => <div>이메일</div>,
    cell: ({ row }) => <div>{row.original.email}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div>상태</div>,
    cell: ({ row, table }) => (
      <Switch
        checked={row.original.status}
        onCheckedChange={() => {
          console.log(table.options.data);

          console.log(row.original.id);
          console.log(!row.original.status);
        }}
      />
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div>금액</div>,
    cell: ({ row }) => <div>{row.original.amount}</div>,
  },
  {
    accessorKey: "isDeleted",
    header: () => <div>삭제</div>,
    cell: () => (
      <Button variant={"secondary3"} type="button" size={"sm"}>
        삭제
        <Icon type="trash" />
      </Button>
    ),
  },
];
