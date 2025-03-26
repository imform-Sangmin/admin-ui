import { Icon } from "@/components/Icons";
import PaginationRender from "@/components/PaginationRender";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import FormContainer from "./(container)/FormContainer";
import { TableData } from "@/consts/TableData";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function Page() {
  const [tableData, setTableData] = useState<TableData[]>();

  const handleSwitch = async (id: string, status: boolean) => {
    console.log(id, status);
    const res = await fetch("http://localhost:3000/api/splash", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: tableData, id: id, status: status }),
    });
    const data = await res.json();
    console.log(data);
    setTableData(data);
  };

  const handleDelete = async (id: string) => {
    console.log(id);
    const res = await fetch("http://localhost:3000/api/splash", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: tableData, id }),
    });
    const data = await res.json();
    console.log(data);
    setTableData(data);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/splash", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setTableData(data);
      });
  }, []);

  return (
    <>
      <Title className="flex justify-between w-full">
        <Button variant={"default"} type="button" size={"lg"}>
          신규등록
          <Icon type="plus" />
        </Button>
      </Title>

      <FormContainer />

      <div className="flex flex-col gap-[1.6rem] rounded-lg bg-white py-[1.6rem]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NO</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>금액</TableHead>
              <TableHead>삭제</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData?.map((data, index) => (
              <TableRow key={data.id}>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>
                  <Switch
                    checked={data.status}
                    onCheckedChange={() => {
                      handleSwitch(data.id, !data.status);
                    }}
                  />
                </TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>
                  <Button
                    variant={"secondary3"}
                    type="button"
                    size={"sm"}
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    삭제
                    <Icon type="trash" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <PaginationRender
          totalPage={50}
          pageSize={10}
          className={"mb-[3.2rem]"}
        />
      </div>
    </>
  );
}
