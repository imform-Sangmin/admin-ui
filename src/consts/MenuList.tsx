import { Icon } from "../components/Icons";

export interface SubMenuType {
  title: string;
  url: string;
}
export interface MenuType {
  title: string;
  icon: React.ReactNode;
  url?: string;
  sub?: SubMenuType[];
}

export const MenuList: { [key: string]: MenuType } = {
  dashboard: {
    title: "대시보드",
    icon: <Icon type="dashboard" />,
    url: "/dashboard",
  },
  app: {
    title: "앱 관리",
    icon: <Icon type="app" />,
    sub: [
      {
        title: "스플래시 화면 관리",
        url: "/app/splash",
      },
      {
        title: "로그인 화면 관리",
        url: "/app/login",
      },
      {
        title: "앱 구동 관리",
        url: "/app/running",
      },
    ],
  },
  contents: {
    title: "콘텐츠 관리",
    icon: <Icon type="content" />,
    sub: [
      {
        title: "스플래시 화면 관리",
        url: "/contents/splash",
      },
      {
        title: "로그인 화면 관리",
        url: "/contents/login",
      },
      {
        title: "앱 구동 관리",
        url: "/contents/running",
      },
    ],
  },
  asset: {
    title: "자산 관리",
    icon: <Icon type="money" />,
    sub: [
      {
        title: "스플래시 화면 관리",
        url: "/asset/splash",
      },
      {
        title: "로그인 화면 관리",
        url: "/asset/login",
      },
      {
        title: "앱 구동 관리",
        url: "/asset/running",
      },
    ],
  },
  member: {
    title: "회원 관리",
    icon: <Icon type="member" />,
    sub: [
      {
        title: "스플래시 화면 관리",
        url: "/member/splash",
      },
      {
        title: "로그인 화면 관리",
        url: "/member/login",
      },
      {
        title: "앱 구동 관리",
        url: "/member/running",
      },
    ],
  },
  event: {
    title: "이벤트 관리",
    icon: <Icon type="gift" />,
    sub: [
      {
        title: "스플래시 화면 관리",
        url: "/event/splash",
      },
      {
        title: "로그인 화면 관리",
        url: "/event/login",
      },
      {
        title: "앱 구동 관리",
        url: "/event/running",
      },
    ],
  },
  support: {
    title: "고객 지원",
    icon: <Icon type="center" />,
    sub: [
      {
        title: "스플래시 화면 관리",
        url: "/support/splash",
      },
      {
        title: "로그인 화면 관리",
        url: "/support/login",
      },
      {
        title: "앱 구동 관리",
        url: "/support/running",
      },
    ],
  },
  statistics: {
    title: "통계",
    icon: <Icon type="graph" />,
    sub: [
      {
        title: "스플래시 화면 관리",
        url: "/statistics/splash",
      },
      {
        title: "로그인 화면 관리",
        url: "/statistics/login",
      },
      {
        title: "앱 구동 관리",
        url: "/statistics/running",
      },
    ],
  },
};
