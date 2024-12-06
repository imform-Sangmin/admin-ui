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
      <SidebarHeader className="pt-60 pb-52">
        <Link href="/">
          <Logo className="h-[19px] m-auto" />
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
