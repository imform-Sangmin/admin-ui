import { Lnb } from "@/components/Lnb";

interface Props {
  children: any;
}

export const Layout = (props: Props) => {
  return (
    <>
      <Lnb />
      <main>{props.children}</main>
    </>
  );
};
