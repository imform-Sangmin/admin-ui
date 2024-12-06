import { SidebarTrigger } from "../ui/sidebar";
import { Breadcrumbs } from "./Breadcrumbs";
import { UserNav } from "./UserNav";

export const Header = () => {
  return (
    <header className="w-full ml-auto py-28 px-40 pl-20 flex gap-15">
      <SidebarTrigger />
      <Breadcrumbs />
      <UserNav />
    </header>
  );
};
