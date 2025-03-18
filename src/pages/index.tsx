import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icons";
import FormFieldInput from "@/components/Form/FormFieldInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormFieldSelect from "@/components/Form/FormFieldSelect";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { FormFieldMultiSelect } from "@/components/Form/FormFieldMultiSelect";

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
  select: z.string({
    required_error: "Please select an email to display.",
  }),
  select2: z.string({
    required_error: "Please select an email to display.",
  }),
  select3: z.array(
    z.string({
      required_error: "Please select an email to display.",
    })
  ),
});

export default function Home() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      username1: "",
      username2: "",
      username3: "",
      username4: "",
      select: "",
      select2: "",
      select3: [],
    },
  });

  return (
    <div className="px-[1.2rem]">
      <h2>Button</h2>
      <div className="flex flex-wrap items-center gap-[1.2rem]">
        <Button>
          버튼 <Icon type="settings" />
        </Button>
        <Button size={"md"}>
          버튼 <Icon type="settings" />
        </Button>
        <Button size={"sm"}>
          버튼 <Icon type="settings" />
        </Button>
        <Button size={"xs"}>
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
        <Button variant={"ghost"}>
          버튼 <Icon type="settings" />
        </Button>
      </div>

      <Form {...form}>
        <form>
          <h2>Input</h2>
          <div className="flex flex-wrap  gap-[1.2rem]">
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
          </div>
          <h2>Select</h2>
          <div className="flex flex-wrap gap-[1.2rem]">
            <FormFieldSelect
              form={form}
              name="select"
              label="라벨"
              placeholder="선택해주세요"
              description="도움말영역-오류"
              options={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "7", value: "7" },
                { label: "8", value: "8" },
                { label: "9", value: "9" },
                { label: "10", value: "10" },
                { label: "11", value: "11" },
                { label: "12", value: "12" },
                { label: "13", value: "13" },
                { label: "14", value: "14" },
                { label: "15", value: "15" },
              ]}
            />
            <FormFieldSelect
              form={form}
              name="select2"
              label="라벨"
              placeholder="선택해주세요"
              description="도움말영역-오류"
              elSize={"sm"}
              options={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "7", value: "7" },
                { label: "8", value: "8" },
                { label: "9", value: "9" },
                { label: "10", value: "10" },
                { label: "11", value: "11" },
                { label: "12", value: "12" },
                { label: "13", value: "13" },
                { label: "14", value: "14" },
                { label: "15", value: "15" },
              ]}
            />
          </div>
          <h2>MultiSelect</h2>
          <FormFieldMultiSelect
            form={form}
            name="select3"
            label="라벨"
            placeholder="선택해주세요"
            description="도움말영역-오류"
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
            ]}
          />
        </form>
      </Form>

      <h2>Checkbox</h2>
      <div className="flex flex-wrap gap-[1.2rem]">
        <Checkbox />
        <Checkbox disabled />
        <Checkbox size="xs" />
        <Checkbox size="xs" disabled />
      </div>
      <h2>Radio</h2>
      <RadioGroup>
        <RadioGroupItem value="1" />
        <RadioGroupItem value="2" />
        <RadioGroupItem value="3" />
      </RadioGroup>
      <h2>Switch</h2>
      <Switch />
      <Switch variant="error" />
      <Switch disabled />
      <Switch size="sm" />
    </div>
  );
}
