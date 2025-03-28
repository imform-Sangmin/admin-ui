import FormFieldInput from "@/components/Form/FormFieldInput";
import FormFieldRadio from "@/components/Form/FormFieldRadio";
import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType } from "../index";
import { Form } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const FormLow = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex items-center w-full gap-[.8rem]">
      <p className="text-gray-9 text-[1.4rem] font-bold min-w-[11.3rem]">
        {label}
      </p>
      {children}
    </div>
  );
};

const FormContainer = ({
  form,
  handleSubmit,
}: {
  form: UseFormReturn<FormSchemaType>;
  handleSubmit: (data: FormSchemaType) => void;
}) => {
  const [searchType, setSearchType] = useState<string>("email");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex gap-[.4rem]"
      >
        <div className="flex flex-col gap-[1.6rem] w-full">
          <FormLow label="검색어">
            <Select
              onValueChange={(value) => setSearchType(value)}
              defaultValue={searchType}
              onOpenChange={(open) => {
                if (open) {
                  form.setValue("email", "");
                  form.setValue("name", "");
                }
              }}
            >
              <SelectTrigger className="max-w-[10rem]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">이메일</SelectItem>
                <SelectItem value="name">이름</SelectItem>
              </SelectContent>
            </Select>
            <FormFieldInput
              form={form}
              name={searchType as "email" | "name"}
              placeholder="검색어를 입력해주세요."
              elSize={"sm"}
              className="w-full"
            />
          </FormLow>
          <FormLow label="노출여부">
            <FormFieldRadio
              form={form}
              name="status"
              options={[
                { label: "전체", value: "all" },
                { label: "활성화", value: "active" },
                { label: "비활성화", value: "inactive" },
              ]}
            />
          </FormLow>
        </div>
        <Button variant={"secondary1"} type="submit" size={"md"}>
          검색
          <Icon type="search" />
        </Button>
        <Button variant={"secondary2"} size={"md"} onClick={() => {}}>
          <Icon type="return" />
        </Button>
      </form>
    </Form>
  );
};

export default FormContainer;
