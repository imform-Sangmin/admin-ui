import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomSidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <SidebarProvider>
        <CustomSidebar />
        <main>
          <Header />
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};
