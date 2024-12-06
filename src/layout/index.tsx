import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
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
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};
