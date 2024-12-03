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
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
          <form className="flex gap-8 w-full py-24 px-40 rounded-12 bg-white">
            <div className="flex flex-col gap-16 flex-1">
              <div className="flex items-center gap-8">
                <FormLabel className="w-117 flex-none">검색어</FormLabel>
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger className="w-160">
                            <SelectValue placeholder="이름" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="name">이름</SelectItem>
                              <SelectItem value="id">ID (이메일)</SelectItem>
                              <SelectItem value="department">부서</SelectItem>
                              <SelectItem value="authority">권한</SelectItem>
                              <SelectItem value="registrationDate">
                                등록일
                              </SelectItem>
                              <SelectItem value="accessTime">
                                최근 접속시간
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="search"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="검색어를 입력해주세요."
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-8">
                <FormLabel className="w-117 flex-none">권한</FormLabel>
                <FormField
                  control={form.control}
                  name="authority"
                  render={({ field }) => (
                    <FormItem className="flex items-center h-40">
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
                  )}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                variant={"secondary1"}
                type="submit"
                className="px-26 gap-4"
              >
                검색
                <Icon type="search" />
              </Button>
              <Button variant={"secondary2"}>
                <Icon type="return" />
              </Button>
            </div>
          </form>
        </Form>
        <div className="flex flex-col gap-16 py-20 rounded-12 bg-white">
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>이름</TableHead>
                <TableHead>ID (이메일)</TableHead>
                <TableHead>부서</TableHead>
                <TableHead>권한</TableHead>
                <TableHead>등록일</TableHead>
                <TableHead>최근 접속시간</TableHead>
                <TableHead>수정</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
      </section>
    </>
  );
}
