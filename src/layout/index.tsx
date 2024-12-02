import { SidebarProvider } from "@/components/ui/sidebar";
import { CustomSidebar } from "@/components/Sidebar/index";
import { Header } from "@/components/Header/index";

interface Props {
  children: any;
}

export const Layout = (props: Props) => {
  return (
    <>
      <SidebarProvider>
        <CustomSidebar />
        <main>
          <Header />
          {props.children}
        </main>
      </SidebarProvider>
    </>
  );
};
