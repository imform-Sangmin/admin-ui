import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

export default function AppSplash() {
  const form = useForm();

  return (
    <>
      <section className="px-56 title my-32 flex justify-between items-center">
        <h1>앱 스플래시 화면 관리</h1>
        <Button size={"lg"} className="px-35">
          신규등록
          <Icon type="plus" />
        </Button>
      </section>
      <section className="px-56 flex flex-col gap-16">
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <div className="flex flex-col w-full py-24 px-40 rounded-12 bg-white">
                  <FormItem className="flex items-center w-full">
                    <FormLabel className="w-121">검색어</FormLabel>
                    <FormControl>
                      <div className="flex gap-8 w-full">
                        <Select>
                          <SelectTrigger className="w-160">
                            <SelectValue placeholder="이름" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="est">이름</SelectItem>
                              <SelectItem value="cst">이름</SelectItem>
                              <SelectItem value="mst">이름</SelectItem>
                              <SelectItem value="pst">이름</SelectItem>
                              <SelectItem value="akst">이름</SelectItem>
                              <SelectItem value="hst">이름</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Input
                          placeholder="검색어를 입력해주세요."
                          {...field}
                        />
                        <div className="flex gap-4">
                          <Button variant={"secondary1"}>
                            <Icon type="search" />
                            검색
                          </Button>
                          <Button variant={"secondary2"}>
                            <Icon type="return" />
                          </Button>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                  <FormItem className="flex items-center">
                    <FormLabel className="w-121">권한</FormLabel>
                    <FormControl>
                      <div className="flex gap-8"></div>
                    </FormControl>
                  </FormItem>
                </div>
              )}
            />
          </form>
        </Form>
        <div className="py-24 px-40 rounded-12 bg-white"></div>
      </section>
    </>
  );
}
