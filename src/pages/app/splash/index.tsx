import { Icon } from "@/components/Icons";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import FormContainer from "./(container)/FormContainer";
import { TableData } from "@/consts/TableData";
import TableContainer from "./(container)/TableContainer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { splashApi } from "@/lib/http/api";
import { useState } from "react";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/splash", {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: { data },
  };
};

const FormSchema = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  status: z
    .enum(["all", "active", "inactive"], {
      message: "노출여부를 선택해주세요.",
    })
    .optional(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export default function Page({ data }: { data: TableData[] }) {
  const [tableData, setTableData] = useState<TableData[]>(data);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });

  const handleSubmit = async (data: FormSchemaType) => {
    const res = await splashApi.searchSplash(data);
    setTableData(res);
  };

  return (
    <>
      <Title className="flex justify-between w-full">
        <Button variant={"default"} type="button" size={"lg"}>
          신규등록
          <Icon type="plus" />
        </Button>
      </Title>

      <div className="rounded-lg bg-white py-[1.6rem] px-[4rem] mb-[1.6rem]">
        <FormContainer form={form} handleSubmit={handleSubmit} />
      </div>
      <TableContainer data={tableData} />
    </>
  );
}
