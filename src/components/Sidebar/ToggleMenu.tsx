import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "../Icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import { MenuType } from "@/consts/MenuList";
import { usePathname } from "next/navigation";

interface ToggleMenuProps {
  menulist: MenuType;
}

export const ToggleMenu = ({ menulist }: ToggleMenuProps) => {
  const paths = usePathname();
  const [isOpen, setIsOpen] = useState(
    menulist.sub?.map((list) => list.url).includes(paths) || false
  );

  return (
    <Collapsible
      className="group/collapsible"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <CollapsibleTrigger
        asChild
        className="flex justify-between items-center w-full px-24 py-20 text-white text-16"
      >
        <SidebarMenuButton>
          <span className="flex gap-8 items-center text-16">
            {menulist.icon}
            {menulist.title}
          </span>
          <Icon
            type="down"
            className="ml-auto text-white transition-transform group-data-[state=open]/collapsible:rotate-180"
          />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent
        asChild
        className="transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden"
      >
        <SidebarMenuSub>
          {menulist.sub?.map((subMenu) => (
            <SidebarMenuSubItem key={subMenu.title}>
              <SidebarMenuSubButton asChild isActive={subMenu.url === paths}>
                <Link href={subMenu.url}>
                  <span>{subMenu.title}</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
};
