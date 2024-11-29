import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomSidebar } from "@/components/CustomSidebar";

interface Props {
  children: any;
}

export const Layout = (props: Props) => {
  return (
    <>
      <SidebarProvider>
        <CustomSidebar />
        <main>{props.children}</main>
      </SidebarProvider>
    </>
  );
};
