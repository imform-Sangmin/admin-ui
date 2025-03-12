import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icons";
import FormFieldInput from "@/components/Form/FormFieldInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormFieldSelect from "@/components/Form/FormFieldSelect";

const FormSchema = z.object({
  username1: z.string().min(2, {
    message: "2글자 이상 입력해주세요",
  }),
  username2: z.string().min(2, {
    message: "2글자 이상 입력해주세요",
  }),
  username3: z.string().min(2, {
    message: "2글자 이상 입력해주세요",
  }),
  username4: z.string().min(2, {
    message: "2글자 이상 입력해주세요",
  }),
});

export default function Home() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });

  return (
    <div className="px-[1.2rem]">
      <h2>Button</h2>
      <div>
        <Button>
          버튼 <Icon type="settings" />
        </Button>
        <Button size={"md"}>
          버튼 <Icon type="settings" />
        </Button>
        <Button size={"sm"}>
          버튼 <Icon type="settings" />
        </Button>
        <Button variant={"secondary1"}>
          버튼 <Icon type="settings" />
        </Button>
        <Button variant={"secondary2"}>
          버튼 <Icon type="settings" />
        </Button>
        <Button variant={"secondary3"}>
          버튼 <Icon type="settings" />
        </Button>
        <Button variant={"outline"}>
          버튼 <Icon type="settings" />
        </Button>
      </div>

      <Form {...form}>
        <form>
          <h2>Input</h2>
          <FormFieldInput
            form={form}
            name="username1"
            placeholder="플레이스홀더"
            label="라벨"
            description="도움말영역-오류"
            icon={<Icon type="settings" />}
            required
          />
          <FormFieldInput
            form={form}
            name="username2"
            placeholder="플레이스홀더"
            label="라벨"
            description="도움말영역-오류"
            button={
              <Button variant={"ghost"} className="text-gray-9 w-[5.6rem]">
                <Icon type="settings" />
              </Button>
            }
          />
          <FormFieldInput
            form={form}
            name="username3"
            placeholder="플레이스홀더"
            label="라벨"
            description="도움말영역-오류"
          />
          <FormFieldInput
            form={form}
            name="username4"
            placeholder="플레이스홀더"
            label="라벨"
            description="도움말영역-오류"
            elSize={"sm"}
          />
          <h2>Select</h2>
          <FormFieldSelect form={form} name="select" />
        </form>
      </Form>
    </div>
  );
}
