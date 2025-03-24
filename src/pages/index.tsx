import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icons";
import FormFieldInput from "@/components/Form/FormFieldInput";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import FormFieldSelect from "@/components/Form/FormFieldSelect";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { FormFieldMultiSelect } from "@/components/Form/FormFieldMultiSelect";
import DatePicker from "@/components/DatePicker/DatePicker";
import Counter from "@/components/Counter";
import PaginationRender from "@/components/PaginationRender";
import Chip from "@/components/Chip";
import Radio from "@/components/Radio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
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
  select4: z.array(
    z.string({
      required_error: "Please select an email to display.",
    })
  ),
  stepper: z.number().min(0, {
    message: "0 이상 입력해주세요",
  }),
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function Home() {
  const { toast } = useToast();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      select3: [],
      select4: [],
      stepper: 0,
    },
  });

  return (
    <div className="px-[1.2rem]">
      <h2>Button</h2>
      <div className="flex flex-wrap items-center gap-[1.2rem]">
        <Button size={"xl"}>
          버튼 <Icon type="settings" />
        </Button>
        <Button size={"lg"}>
          버튼 <Icon type="settings" />
        </Button>
        <Button>
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
        <Button variant={"ghost"}>
          버튼 <Icon type="settings" />
        </Button>
      </div>

      <Form {...form}>
        <form>
          <h2>Input</h2>
          <div className="flex flex-wrap gap-[1.2rem]">
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
                <Button
                  variant={"ghost"}
                  size={"lg"}
                  className="text-gray-9 w-[5.6rem] hover:after:content-none"
                >
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
                { label: "옵션하나", value: "1" },
                { label: "옵션둘", value: "2" },
                { label: "옵션셋", value: "3" },
                { label: "옵션넷", value: "4" },
                { label: "옵션다섯", value: "5" },
                { label: "옵션여섯", value: "6" },
                { label: "옵션일곱", value: "7" },
                { label: "옵션여덟", value: "8" },
                { label: "옵션아홉", value: "9" },
                { label: "옵션십", value: "10" },
                { label: "옵션십일", value: "11" },
                { label: "옵션십이", value: "12" },
                { label: "옵션십삼", value: "13" },
                { label: "옵션십사", value: "14" },
                { label: "옵션십오", value: "15" },
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
              { label: "옵션하나", value: "1" },
              { label: "옵션둘", value: "2" },
              { label: "옵션셋", value: "3" },
              { label: "옵션넷", value: "4" },
            ]}
          />
          <FormFieldMultiSelect
            form={form}
            name="select4"
            label="라벨"
            placeholder="선택해주세요"
            description="도움말영역-오류"
            styleType="chip"
            options={[
              { label: "옵션하나", value: "1" },
              { label: "옵션둘", value: "2" },
              { label: "옵션셋", value: "3" },
              { label: "옵션넷", value: "4" },
              { label: "옵션다섯", value: "5" },
              { label: "옵션여섯", value: "6" },
              { label: "옵션일곱", value: "7" },
            ]}
          />
          <h2>Stepper</h2>
          <FormField
            control={form.control}
            name="stepper"
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormControl>
                  <Counter
                    {...field}
                    value={field.value}
                    onChange={field.onChange}
                    error={error}
                    disabled={field.disabled}
                    max={10}
                    min={-5}
                  />
                </FormControl>
              </FormItem>
            )}
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
      <div className="flex flex-wrap gap-[1.2rem]">
        <Radio
          options={[
            { label: "옵션하나", value: "1" },
            { label: "옵션둘", value: "2" },
            { label: "옵션셋", value: "3" },
          ]}
        />
        <Radio
          size="sm"
          variant="error"
          options={[
            { label: "옵션하나", value: "1" },
            { label: "옵션둘", value: "2" },
            { label: "옵션셋", value: "3" },
          ]}
        />
        <Radio
          size="sm"
          disabled
          options={[
            { label: "옵션하나", value: "1" },
            { label: "옵션둘", value: "2" },
            { label: "옵션셋", value: "3" },
          ]}
        />
      </div>
      <h2>Switch</h2>
      <Switch />
      <Switch variant="error" />
      <Switch disabled />
      <Switch size="sm" />
      <h2>Calendar</h2>
      <DatePicker mode="single" />
      <DatePicker mode="range" />
      <h2>Pagination</h2>
      <PaginationRender totalPage={50} pageSize={10} />
      <h2>Chip</h2>
      <Chip variant="filter">옵션명</Chip>
      <Chip variant="filter" on={true}>
        옵션명
      </Chip>
      <Chip variant="option">옵션명</Chip>
      <Chip variant="option" on={true}>
        옵션명
      </Chip>
      <Chip variant="answer">미답변</Chip>
      <Chip variant="answer" on={true}>
        답변완료
      </Chip>

      <h2>Tabs</h2>
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">
            탭1<span>00</span>
          </TabsTrigger>
          <TabsTrigger value="tab2">
            탭2<span>00</span>
          </TabsTrigger>
          <TabsTrigger value="tab3">
            탭3<span>00</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">탭1 내용</TabsContent>
        <TabsContent value="tab2">탭2 내용</TabsContent>
        <TabsContent value="tab3">탭3 내용</TabsContent>
      </Tabs>
      <Tabs defaultValue="tab1">
        <TabsList className="gap-[2rem]">
          <TabsTrigger value="tab1" variant={"line"}>
            탭1<span>00</span>
          </TabsTrigger>
          <TabsTrigger value="tab2" variant={"line"}>
            탭2<span>00</span>
          </TabsTrigger>
          <TabsTrigger value="tab3" variant={"line"}>
            탭3<span>00</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">탭1 내용</TabsContent>
        <TabsContent value="tab2">탭2 내용</TabsContent>
        <TabsContent value="tab3">탭3 내용</TabsContent>
      </Tabs>
      <h2>Toast</h2>
      <Button
        onClick={() => {
          toast({
            title: "내용을 입력하세요",
            variant: "primary",
          });
        }}
      >
        Primary
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "내용을 입력하세요",
            variant: "success",
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "내용을 입력하세요",
            variant: "info",
          });
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "내용을 입력하세요",
            variant: "warning",
          });
        }}
      >
        Wraning
      </Button>
      <Button
        onClick={() => {
          toast({
            title: "내용을 입력하세요",
            variant: "error",
          });
        }}
      >
        Error
      </Button>
    </div>
  );
}
