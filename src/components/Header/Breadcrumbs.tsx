import Link from "next/link";
import { Icon } from "../Icons";
import { usePathname } from "next/navigation";
import { MenuList, MenuType } from "@/consts/MenuList";

export const Breadcrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const pageInfo: MenuType = MenuList[pathNames[0]];

  const isSubPage = pageInfo && pageInfo.sub ? true : false;
  const subPage = isSubPage && pageInfo.sub?.find((sub) => sub.url === paths);

  return (
    <>
      <ul
        id="breadecrumb"
        className="flex gap-[0.4rem] items-center text-base text-secondary-8"
      >
        <li className="text-secondary-8">
          <Link href={"/"}>
            <Icon type="home" />
          </Link>
        </li>
        {pageInfo && (
          <li className="flex gap-[0.4rem] items-center">
            <Icon type="up" className="text-secondary-8 rotate-90" />
            <Link
              href={pageInfo.url || ""}
              className={`${pageInfo.url === paths && "text-secondary-4"}`}
            >
              {pageInfo.title}
            </Link>
          </li>
        )}
        {subPage && (
          <li className="flex gap-[0.4rem] items-center">
            <Icon type="up" className="text-secondary-8 rotate-90" />
            <Link
              href={subPage.url}
              className={`${subPage.url === paths && "text-secondary-4"}`}
            >
              {subPage.title}
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};
