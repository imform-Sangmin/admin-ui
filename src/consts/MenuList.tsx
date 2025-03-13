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
    icon: <Icon type="phone" />,
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
        title: "리그 관리",
        url: "/contents/league",
      },
      {
        title: "대회 관리",
        url: "/contents/contest",
      },
      {
        title: "선수 관리",
        url: "/contents/player",
      },
      {
        title: "데이터센터 관리",
        url: "/contents/dataCenter",
      },
    ],
  },
  asset: {
    title: "자산 관리",
    icon: <Icon type="money" />,
    sub: [
      {
        title: "디지털굿즈 관리",
        url: "/asset/digitalGoods",
      },
      {
        title: "레벨/등급 관리",
        url: "/asset/level",
      },
      {
        title: "마켓 관리",
        url: "/asset/market",
      },
      {
        title: "쿠폰 관리(MASS)",
        url: "/asset/couponMass",
      },
      {
        title: "쿠폰 관리(타겟)",
        url: "/asset/couponTarget",
      },
    ],
  },
  member: {
    title: "회원 관리",
    icon: <Icon type="member" />,
    sub: [
      {
        title: "회원 관리",
        url: "/member/member",
      },
      {
        title: "TDTP 지급/차감 관리",
        url: "/member/tdtp",
      },
    ],
  },
  event: {
    title: "이벤트 관리",
    icon: <Icon type="gift" />,
    sub: [
      {
        title: "래플 관리",
        url: "/event/raffle",
      },
      {
        title: "친구추천 이벤트 관리",
        url: "/event/recommend",
      },
      {
        title: "래퍼럴 관리",
        url: "/event/rafferel",
      },
    ],
  },
  support: {
    title: "고객 지원",
    icon: <Icon type="center" />,
    sub: [
      {
        title: "1:1 문의 관리",
        url: "/support/contact",
      },
      {
        title: "공지사항 관리",
        url: "/support/notice",
      },
      {
        title: "FAQ 관리",
        url: "/support/faq",
      },
      {
        title: "팝업 관리",
        url: "/support/popup",
      },
      {
        title: "스티커 관리",
        url: "/support/sticker",
      },
      {
        title: "앱 푸시 관리",
        url: "/support/appPush",
      },
      {
        title: "약관 및 정책 관리",
        url: "/support/policy",
      },
    ],
  },
  statistics: {
    title: "통계",
    icon: <Icon type="graph" />,
    sub: [
      {
        title: "콘텐츠 통계",
        url: "/statistics/contents",
      },
      {
        title: "회원 통계",
        url: "/statistics/member",
      },
      {
        title: "이벤트 통계",
        url: "/statistics/event",
      },
    ],
  },
};
