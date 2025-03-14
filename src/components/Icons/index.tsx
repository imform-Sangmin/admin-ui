import { cva, VariantProps } from "class-variance-authority";

import Settings from "@/assets/icons/ic_settings.svg";
import Eye from "@/assets/icons/ic_eye.svg";
import Dashboard from "@/assets/icons/ic_dashboard.svg";
import Content from "@/assets/icons/ic_content.svg";
import Money from "@/assets/icons/ic_money.svg";
import Member from "@/assets/icons/ic_member.svg";
import Center from "@/assets/icons/ic_center.svg";
import Gift from "@/assets/icons/ic_gift.svg";
import Graph from "@/assets/icons/ic_graph.svg";
import Trash from "@/assets/icons/ic_trash.svg";
import Person from "@/assets/icons/ic_person.svg";
import Calendar from "@/assets/icons/ic_calendar.svg";
import Clip from "@/assets/icons/ic_clip.svg";
import Time from "@/assets/icons/ic_time.svg";
import Return from "@/assets/icons/ic_return.svg";
import Search from "@/assets/icons/ic_search.svg";
import Logout from "@/assets/icons/ic_logout.svg";
import Download from "@/assets/icons/ic_download.svg";
import Upload from "@/assets/icons/ic_upload.svg";
import ArrowFillDown from "@/assets/icons/ic_arrow-fill_down.svg";
import ArrowFillUp from "@/assets/icons/ic_arrow-fill_up.svg";
import ArrowFillLeft from "@/assets/icons/ic_arrow-fill_left.svg";
import ArrowUp from "@/assets/icons/ic_arrow-chevron_up.svg";
import ArrowDown from "@/assets/icons/ic_arrow-chevron_down.svg";
import ArrowLeft from "@/assets/icons/ic_arrow-chevron_left.svg";
import ArrowRight from "@/assets/icons/ic_arrow-chevron_right.svg";
import Phone from "@/assets/icons/ic_phone.svg";
import Home from "@/assets/icons/ic_home.svg";
import Edit from "@/assets/icons/ic_edit.svg";
import Close from "@/assets/icons/ic_close.svg";
import Plus from "@/assets/icons/ic_plus.svg";
import Minus from "@/assets/icons/ic_minus.svg";
import Check from "@/assets/icons/ic_check.svg";
import Dot from "@/assets/icons/ic_dot.svg";
import ArrowFirst from "@/assets/icons/ic_arrow-first.svg";
import ArrowLast from "@/assets/icons/ic_arrow-last.svg";
import NoImg from "@/assets/icons/ic_noimg.svg";
import Chat from "@/assets/icons/ic_chat.svg";
import Comment from "@/assets/icons/ic_comment.svg";
import CloseCircle from "@/assets/icons/ic_close-circle.svg";
import UpDown from "@/assets/icons/ic_up-down.svg";
import Menu from "@/assets/icons/ic_menu.svg";

const ICON_MAP = {
  settings: Settings,
  eye: Eye,
  dashboard: Dashboard,
  content: Content,
  money: Money,
  member: Member,
  center: Center,
  gift: Gift,
  graph: Graph,
  trash: Trash,
  person: Person,
  calendar: Calendar,
  clip: Clip,
  time: Time,
  return: Return,
  search: Search,
  logout: Logout,
  download: Download,
  upload: Upload,
  arrowFillDown: ArrowFillDown,
  arrowFillUp: ArrowFillUp,
  arrowFillLeft: ArrowFillLeft,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  phone: Phone,
  home: Home,
  edit: Edit,
  close: Close,
  plus: Plus,
  minus: Minus,
  check: Check,
  dot: Dot,
  arrowFirst: ArrowFirst,
  arrowLast: ArrowLast,
  noImg: NoImg,
  chat: Chat,
  comment: Comment,
  closeCircle: CloseCircle,
  upDown: UpDown,
  menu: Menu,
};

const iconVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "w-[2rem]",
      sm: "w-[1.8rem]",
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
