import { Icon } from "@/components/Icons";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
      <Title text="앱 스플래시 화면 관리">
        <Button size={"lg"} className="px-35">
          신규등록
          <Icon type="plus" />
        </Button>
      </Title>
      <section className="px-56 flex flex-col gap-16">
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <div className="flex flex-col gap-16 w-full py-24 px-40 rounded-12 bg-white">
                  <FormItem className="flex items-center w-full">
                    <FormLabel className="w-121 flex-none">검색어</FormLabel>
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
                  <FormItem className="flex items-center h-40">
                    <FormLabel className="w-121 flex-none">권한</FormLabel>
                    <FormControl>
                      <ul className="flex gap-24">
                        <li className="flex items-center gap-6">
                          <Checkbox id="total" />
                          <label htmlFor="total">전체</label>
                        </li>
                        <li className="flex items-center gap-6">
                          <Checkbox id="master" />
                          <label htmlFor="master">최고관리자</label>
                        </li>
                        <li className="flex items-center gap-6">
                          <Checkbox id="normal" />
                          <label htmlFor="normal">일반관리자</label>
                        </li>
                      </ul>
                    </FormControl>
                  </FormItem>
                </div>
              )}
            />
          </form>
        </Form>
        <div className="py-20 rounded-12 bg-white">
          <div className="ml-26 mr-40 flex justify-between items-end font-bold">
            <p>
              검색결과 <span className="text-states-red">00</span>건
            </p>
            <div className="flex gap-16">
              <Button variant={"secondary1"}>
                계정권한관리
                <Icon type="settings" />
              </Button>
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="최근등록일순" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="10">10개</SelectItem>
                      <SelectItem value="20">20개</SelectItem>
                      <SelectItem value="50">50개</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
