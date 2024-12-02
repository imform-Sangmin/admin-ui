import { Icon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AppSplash() {
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
        <div className="py-24 px-40 rounded-12 bg-white">
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
        </div>
        <div className="py-24 px-40 rounded-12 bg-white"></div>
      </section>
    </>
  );
}
