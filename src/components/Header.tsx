import Link from "next/link";
import { Breadcrumbs } from "./Header/Breadcrumbs";
import { Icon } from "./Icons";

export const Header = () => {
  return (
    <header className="py-28 px-40 flex justify-between">
      <Breadcrumbs />
      <div className="flex gap-20 text-secondary-8 [&>a]:flex [&>a]:gap-4 [&_svg]:text-secondary-6">
        <Link href={"#"}>
          <Icon type="member" /> 내정보
        </Link>
        <Link href={"#"}>
          <Icon type="settings" /> 계정관리
        </Link>
        <Link href={"#"}>
          <Icon type="logout" /> 로그아웃
        </Link>
      </div>
    </header>
  );
};
