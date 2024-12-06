import Link from "next/link";
import { Icon } from "../Icons";
import { usePathname } from "next/navigation";
import { MenuList, MenuType } from "@/consts/MenuList";

export const Breadcrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const pageInfo: MenuType = MenuList[pathNames[0]];
  const subPage = pageInfo.sub?.find((sub) => sub.url === paths);

  return (
    <>
      <ul id="breadecrumb" className="flex gap-4 items-center text-secondary-8">
        <li className="text-secondary-8">
          <Link href={"/"}>
            <Icon type="home" />
          </Link>
        </li>
        {pageInfo && (
          <li className="flex gap-4 items-center">
            <Icon type="up" className="text-secondary-8 rotate-90" />
            <Link
              href={pageInfo.url || "/"}
              className={`${!pageInfo.url && "pointer-events-none"} ${
                pageInfo.url === paths && "text-secondary-4"
              }`}
            >
              {pageInfo.title}
            </Link>
          </li>
        )}
        {pageInfo && pageInfo.sub && (
          <li className="flex gap-4 items-center">
            <Icon type="up" className="text-secondary-8 rotate-90" />
            <Link
              href={subPage?.url || "/"}
              className={`${!subPage?.url && "pointer-events-none"} ${
                subPage?.url === paths && "text-secondary-4"
              }`}
            >
              {subPage?.title}
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};
