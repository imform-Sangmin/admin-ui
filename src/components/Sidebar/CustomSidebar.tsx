import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import { Icon } from "../Icons";
import { MenuList } from "../../consts/MenuList";

import Logo from "@/assets/images/logo.svg";
import Link from "next/link";

export const CustomSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="pt-60 pb-52">
        <Link href="/">
          <Logo className="h-[19px] m-auto" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden">
        <SidebarMenu>
          {MenuList.map((menu) =>
            menu.sub ? (
              <SidebarMenuItem key={menu.title}>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger className="flex justify-between items-center w-full px-24 py-20 text-white text-16">
                    <span className="flex gap-8 items-center text-16">
                      {menu.icon}
                      {menu.title}
                    </span>
                    <Icon
                      type="down"
                      className="text-white transition-transform group-data-[state=open]/collapsible:rotate-180"
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="border-none m-0 p-0 pl-56 pb-28 gap-12">
                      {menu.sub.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            className="h-21 p-0 text-14 hover:bg-transparent hover:text-primary-2 active:bg-transparent active:text-inherit"
                          >
                            <a href={item.url}>
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            ) : (
              <SidebarMenuItem key={menu.title}>
                <SidebarMenuButton
                  asChild
                  className="h-auto px-24 py-20 text-white text-16 [&>svg]:size-20 gap-8 hover:bg-transparent hover:text-inherit"
                >
                  <a href={menu.url}>
                    {menu.icon}
                    <span>{menu.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          )}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
