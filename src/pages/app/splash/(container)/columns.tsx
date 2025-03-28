"use client";

import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { ColumnDef } from "@tanstack/react-table";

export type SplashTableData = {
  id: string;
  email: string;
  name: string;
  status: boolean;
  amount: number;
};

export type SplashTableUpdateData = Partial<SplashTableData>;

export const columns: ColumnDef<SplashTableData>[] = [
  {
    accessorKey: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "index",
    header: () => <div>NO</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "name",
    header: () => <div>이름</div>,
    cell: ({ row }) => <div className="text-left">{row.original.name}</div>,
  },
  {
    accessorKey: "email",
    header: () => <div>이메일</div>,
    cell: ({ row }) => <div className="text-left">{row.original.email}</div>,
  },
  {
    accessorKey: "status",
    header: () => <div>노출여부</div>,
    cell: ({ row, table }) => (
      <Switch
        checked={row.original.status}
        onCheckedChange={() => {
          table.options.meta?.onUpdateData?.(row.original.id, {
            status: !row.original.status,
          });
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
    cell: ({ row, table }) => (
      <Button
        variant={"secondary3"}
        type="button"
        size={"sm"}
        onClick={() => {
          table.options.meta?.onDeleteData?.(row.original.id);
        }}
      >
        삭제
        <Icon type="trash" />
      </Button>
    ),
  },
];
