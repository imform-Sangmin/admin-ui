import Logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { Icon } from "./Icons";

export const Sidebar = () => {
  return (
    <section className="w-[272px] h-full py-[16px] pl-[16px] flex-none">
      <div className="flex-col gap-[24px] w-full h-full bg-gray-9 rounded-[12px]">
        <div className="pt-[60px] pb-[52px]">
          <Logo className="h-[19px] m-auto" />
        </div>
        <nav>
          <ul className="text-white">
            <li>
              <Link
                href={"/dashboard"}
                className="px-24 py-20 flex gap-8 text-16  [&>svg]:size-20"
              >
                <Icon type="dashboard" /> 대시보드
              </Link>
            </li>
            <li>
              <button className="px-24 py-20 flex gap-8 text-16  [&>svg]:size-20">
                <Icon type="app" /> 앱 관리
                <Icon
                  type="down"
                  className=" transition-transform group-data-[state=open]/collapsible:rotate-180"
                />
              </button>
              <ul className="pl-56 pb-28 flex flex-col gap-12 text-14">
                <li>
                  <Link href={""}>스플래시 화면 관리</Link>
                </li>
                <li>
                  <Link href={""}>로그인 화면 관리</Link>
                </li>
                <li>
                  <Link href={""}>앱 구동 관리</Link>
                </li>
              </ul>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
