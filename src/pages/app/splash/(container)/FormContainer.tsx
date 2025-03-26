import FormFieldInput from "@/components/Form/FormFieldInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const FormContainer = () => {
  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  return (
    <div className="flex flex-col gap-[1.6rem] rounded-lg bg-white py-[1.6rem] px-[4rem] mb-[1.6rem]">
      <Form {...form}>
        <form>
          <div className="flex items-center justify-between w-full gap-[.8rem]">
            <p className="text-gray-9 text-[1.4rem] font-bold min-w-[11.3rem]">
              검색어
            </p>
            <FormFieldInput
              form={form}
              name="name"
              placeholder="검색어를 입력해주세요."
              elSize={"sm"}
            />
            <Button variant={"secondary1"} type="submit" size={"md"}>
              검색
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormContainer;
