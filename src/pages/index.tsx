import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icons";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <h2>Button</h2>
      <>
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
      </>
      <h2>Input</h2>
      <Input placeholder="플레이스홀더" />
    </>
  );
}
