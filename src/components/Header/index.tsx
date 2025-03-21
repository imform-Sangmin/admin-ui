import { cn } from "@/lib/utils";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { Breadcrumbs } from "./Breadcrumbs";
import { UserNav } from "./UserNav";

export const Header = () => {
  const sidebarState = useSidebar();

  return (
    <header
      className={cn(
        "fixed top-0 right-0 w-[calc(100%-var(--sidebar-width))] ml-auto py-[2.8rem] px-[4rem] pl-[2rem] flex gap-[1.5rem] transition-all duration-300 box-border",
        sidebarState?.open
          ? "w-[calc(100%-var(--sidebar-width))]"
          : "w-[calc(100%-calc(var(--sidebar-width-icon)_+_1.6rem))]"
      )}
    >
      <SidebarTrigger />
      <Breadcrumbs />
      <UserNav />
    </header>
  );
};
