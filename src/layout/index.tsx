import { SidebarProvider } from "@/components/ui/sidebar";
import { CustomSidebar } from "@/components/Sidebar/index";
import { Header } from "@/components/Header/index";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SidebarProvider>
        <CustomSidebar />
        <main>{children}</main>
      </SidebarProvider>
    </>
  );
};
