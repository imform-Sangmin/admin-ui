import { Icon } from "@/components/Icons";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import FormContainer from "./(container)/FormContainer";
import { TableData } from "@/consts/TableData";
import TableContainer from "./(container)/TableContainer";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/splash", {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: { data },
  };
};

export default function Page({ data }: { data: TableData[] }) {
  return (
    <>
      <Title className="flex justify-between w-full">
        <Button variant={"default"} type="button" size={"lg"}>
          신규등록
          <Icon type="plus" />
        </Button>
      </Title>

      <FormContainer />
      <TableContainer data={data} />
    </>
  );
}
