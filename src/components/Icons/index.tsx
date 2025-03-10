import { cva, VariantProps } from "class-variance-authority";

import App from "@/assets/icons/ic_app.svg";
import Dashboard from "@/assets/icons/ic_dashboard.svg";
import Content from "@/assets/icons/ic_content.svg";
import Money from "@/assets/icons/ic_money.svg";
import Member from "@/assets/icons/ic_member.svg";
import Gift from "@/assets/icons/ic_gift.svg";
import Center from "@/assets/icons/ic_center.svg";
import Graph from "@/assets/icons/ic_graph.svg";
import Down from "@/assets/icons/ic_down.svg";
import Up from "@/assets/icons/ic_up.svg";
import Person from "@/assets/icons/ic_person.svg";
import PersonLine from "@/assets/icons/ic_person-line.svg";
import Settings from "@/assets/icons/ic_settings.svg";
import Logout from "@/assets/icons/ic_logout.svg";
import Trash from "@/assets/icons/ic_trash.svg";
import Edit from "@/assets/icons/ic_edit.svg";
import Home from "@/assets/icons/ic_home.svg";
import Plus from "@/assets/icons/ic_plus.svg";
import Search from "@/assets/icons/ic_search.svg";
import Return from "@/assets/icons/ic_return.svg";
import NoImg from "@/assets/icons/ic_noimg.svg";
import Download from "@/assets/icons/ic_download.svg";
import Upload from "@/assets/icons/ic_upload.svg";
import Calendar from "@/assets/icons/ic_calendar.svg";
import Time from "@/assets/icons/ic_time.svg";
import CloseCircle from "@/assets/icons/ic_close-circle.svg";
import Close from "@/assets/icons/ic_close.svg";
import Check from "@/assets/icons/ic_check.svg";

const ICON_MAP = {
  app: App,
  dashboard: Dashboard,
  content: Content,
  money: Money,
  member: Member,
  gift: Gift,
  center: Center,
  graph: Graph,
  down: Down,
  up: Up,
  person: Person,
  personLine: PersonLine,
  settings: Settings,
  logout: Logout,
  trash: Trash,
  edit: Edit,
  home: Home,
  plus: Plus,
  search: Search,
  return: Return,
  noImg: NoImg,
  download: Download,
  upload: Upload,
  calendar: Calendar,
  time: Time,
  closeCircle: CloseCircle,
  close: Close,
  check: Check,
};

const iconVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "w-[2rem]",
      sm: "",
      lg: "w-[2.4rem]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface IconPropsType
  extends React.SVGAttributes<HTMLOrSVGElement>,
    VariantProps<typeof iconVariants> {
  type: keyof typeof ICON_MAP;
}

export const Icon = ({
  type,
  className,
  variant,
  size,
  ...props
}: IconPropsType) => {
  const IconComponent = ICON_MAP[type];

  return (
    <IconComponent
      className={iconVariants({ variant, size, className })}
      {...props}
    />
  );
};
