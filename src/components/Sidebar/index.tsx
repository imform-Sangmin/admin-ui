import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

import Logo from "@/assets/images/logo.svg";
import { MenuList } from "@/consts/MenuList";
import Link from "next/link";
import { ToggleMenu } from "./ToggleMenu";
import { usePathname } from "next/navigation";

export const CustomSidebar = () => {
  const paths = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="pt-[6rem] pb-[5.2rem]">
        <Link href="/">
          <Logo className="h-[1.9rem] m-auto" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.values(MenuList).map((menu) => (
                <SidebarMenuItem key={menu.title}>
                  {menu.sub && !menu.url ? (
                    <ToggleMenu menulist={menu} />
                  ) : (
                    <SidebarMenuButton asChild isActive={menu.url === paths}>
                      <Link href={menu.url || "/"}>
                        {menu.icon}
                        <span>{menu.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
