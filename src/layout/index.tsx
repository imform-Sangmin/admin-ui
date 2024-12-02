import { SidebarProvider } from "@/components/ui/sidebar";
import { CustomSidebar } from "@/components/Sidebar/CustomSidebar";
import { Header } from "@/components/Header";

interface Props {
  children: any;
}

export const Layout = (props: Props) => {
  return (
    <>
      <SidebarProvider>
        <CustomSidebar />
        {/* <Sidebar /> */}
        <main>
          <Header />
          {props.children}
        </main>
      </SidebarProvider>
    </>
  );
};
