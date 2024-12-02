import Link from "next/link";
import { Icon } from "../Icons";
import { usePathname } from "next/navigation";

const menu: { [key: string]: { name: string; path?: string } } = {
  dashboard: { name: "대시보드", path: "/dashboard" },
  app: { name: "앱 관리" },
  splash: { name: "스플래시 화면 관리", path: "/app/splash" },
  login: { name: "로그인 화면 관리", path: "/app/login" },
  running: { name: "앱 구동 관리", path: "/app/running" },
};

export const Breadcrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <>
      <ul id="breadecrumb" className="flex gap-4 items-center">
        <li className="text-secondary-8">
          <Link href={"/"}>
            <Icon type="home" />
          </Link>
        </li>
        {pathNames.map((path) => (
          <li key={path} className="flex gap-4 items-center">
            <Icon type="up" className="text-secondary-8 rotate-90" />
            {menu[path].path && menu[path].path !== paths ? (
              <Link
                href={menu[path].path}
                className={`${menu[path].path === paths && "text-secondary-4"}`}
              >
                {menu[path].name}
              </Link>
            ) : (
              <span
                className={`${menu[path].path === paths && "text-secondary-4"}`}
              >
                {menu[path].name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
