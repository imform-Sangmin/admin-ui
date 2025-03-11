import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icons";
import FormFieldInput from "@/components/Form/FormFieldInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Home() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });

  // console.log(form.formState.isValid);

  return (
    <>
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
      <h2>Input</h2>

      <Form {...form}>
        <form>
          <FormFieldInput
            form={form}
            name="username"
            placeholder="플레이스홀더"
            label="라벨"
            description="도움말영역-오류"
          />
        </form>
      </Form>
    </>
  );
}
