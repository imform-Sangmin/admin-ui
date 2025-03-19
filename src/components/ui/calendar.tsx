import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Icon } from "../Icons";
import { format } from "date-fns";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={ko}
      formatters={{
        formatCaption: (date) => format(date, "yyyy.MM"),
      }}
      showOutsideDays={showOutsideDays}
      className={cn("min-w-[27.5rem] w-max", className)}
      classNames={{
        months: "flex gap-[3.2rem]",
        month: "w-full",
        caption: "flex justify-center relative items-center mb-[1.6rem]",
        caption_label: "text-md font-bold",
        nav: "space-x-1 flex items-center",
        nav_button: cn("h-[1.6rem] w-[1.6rem] bg-transparent p-0"),
        nav_button_previous: "absolute left-0 top-[.4rem]",
        nav_button_next: "absolute right-0 top-[.4rem]",
        table: "w-full border-collapse flex flex-col gap-[1.6rem]",
        head_row: "flex justify-between w-full",
        head_cell: "flex-1 font-normal text-[1.2rem]",
        row: "flex justify-between w-full",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary-cyan-light [&:has([aria-selected].day-outside)]:bg-transparent [&:has([aria-selected].day-range-end)]:rounded-r-full",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-full [&:has(>.day-range-start)]:rounded-l-full"
            : "[&:has([aria-selected])]:rounded-full [&:has([aria-selected])]:bg-primary-cyan-dark"
        ),
        tbody: "flex flex-col gap-[.4rem] w-full space-y-0",
        day: "w-[3.2rem] h-[3.2rem] font-normal flex items-center justify-center rounded-full",
        day_range_start: "day-range-start bg-primary-cyan-dark",
        day_range_end: "day-range-end bg-primary-cyan-dark",
        day_selected:
          "text-white hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: cn(
          "day-today bg-secondary-1 aria-selected:bg-transparent",
          props.mode === "range" && "aria-selected:bg-primary-cyan-dark"
        ),
        day_outside: cn(
          "day-outside text-gray-4 aria-selected:bg-transparent aria-selected:text-gray-4"
        ),
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:text-primary-cyan-dark [&.day-today]:bg-transparent",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <Icon
            type="arrowLeft"
            className={cn("w-full", className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <Icon
            type="arrowRight"
            className={cn("w-full", className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
