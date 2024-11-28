import dynamic from "next/dynamic";

const ICON_MAP = {
  dashboard: () => import("@/assets/icons/ic_dashboard.svg"),
  content: () => import("@/assets/icons/ic_content.svg"),
  money: () => import("@/assets/icons/ic_money.svg"),
  member: () => import("@/assets/icons/ic_member.svg"),
  gift: () => import("@/assets/icons/ic_gift.svg"),
  center: () => import("@/assets/icons/ic_center.svg"),
  graph: () => import("@/assets/icons/ic_graph.svg"),
  down: () => import("@/assets/icons/ic_down.svg"),
  up: () => import("@/assets/icons/ic_up.svg"),
  person: () => import("@/assets/icons/ic_person.svg"),
  personLine: () => import("@/assets/icons/ic_person-line.svg"),
  settings: () => import("@/assets/icons/ic_settings.svg"),
  logout: () => import("@/assets/icons/ic_logout.svg"),
  trash: () => import("@/assets/icons/ic_trash.svg"),
  edit: () => import("@/assets/icons/ic_edit.svg"),
  home: () => import("@/assets/icons/ic_home.svg"),
  plus: () => import("@/assets/icons/ic_plus.svg"),
  search: () => import("@/assets/icons/ic_search.svg"),
  return: () => import("@/assets/icons/ic_return.svg"),
  noImg: () => import("@/assets/icons/ic_noimg.svg"),
  download: () => import("@/assets/icons/ic_download.svg"),
  upload: () => import("@/assets/icons/ic_upload.svg"),
  calendar: () => import("@/assets/icons/ic_calendar.svg"),
  time: () => import("@/assets/icons/ic_time.svg"),
  closeCircle: () => import("@/assets/icons/ic_close-circle.svg"),
  close: () => import("@/assets/icons/ic_close.svg"),
  check: () => import("@/assets/icons/ic_check.svg"),
};

interface IconPropsType extends React.SVGAttributes<HTMLOrSVGElement> {
  type: keyof typeof ICON_MAP;
}

export const Icon = ({ type, ...props }: IconPropsType) => {
  const IconComponent = dynamic(ICON_MAP[type], {
    loading: () => <></>,
  });

  return <IconComponent {...props} />;
};
