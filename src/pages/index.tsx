import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icons";

export default function Home() {
  return (
    <>
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
    </>
  );
}
