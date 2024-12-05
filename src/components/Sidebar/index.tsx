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

export const CustomSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="pt-60 pb-52">
        <Link href="/">
          <Logo className="h-[19px] m-auto" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.values(MenuList).map((menu) =>
                menu.sub && !menu.url ? (
                  <SidebarMenuItem key={menu.title}>
                    <ToggleMenu menulist={menu} />
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem key={menu.title}>
                    <Link href={menu.url || "/"}>
                      <SidebarMenuButton>
                        {menu.icon}
                        <span>{menu.title}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
