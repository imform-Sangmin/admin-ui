import { SidebarTrigger } from "../ui/sidebar";
import { Breadcrumbs } from "./Breadcrumbs";
import { UserNav } from "./UserNav";

export const Header = () => {
  return (
    <header className="w-full ml-auto py-[2.8rem] px-[4rem] pl-[2rem] flex gap-[1.5rem]">
      <SidebarTrigger />
      <Breadcrumbs />
      <UserNav />
    </header>
  );
};
