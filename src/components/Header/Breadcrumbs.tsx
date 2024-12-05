import Link from "next/link";
import { Icon } from "../Icons";
import { usePathname } from "next/navigation";
import { MenuList, MenuType } from "@/consts/MenuList";

export const Breadcrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const pageInfo: MenuType = MenuList[pathNames[0]];

  return (
    <>
      <ul id="breadecrumb" className="flex gap-4 items-center">
        <li className="text-secondary-8">
          <Link href={"/"}>
            <Icon type="home" />
          </Link>
        </li>
        {pageInfo && (
          <li className="flex gap-4 items-center">
            <Icon type="up" className="text-secondary-8 rotate-90" />
            {pageInfo.title}
          </li>
        )}
        {pageInfo && pageInfo.sub && (
          <li className="flex gap-4 items-center">
            <Icon type="up" className="text-secondary-8 rotate-90" />
            {pageInfo.sub.find((sub) => sub.url === paths)?.title}
          </li>
        )}
      </ul>
    </>
  );
};
