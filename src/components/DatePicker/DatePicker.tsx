import { addDays, format } from "date-fns";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Icon } from "../Icons";
import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";

type DatePickerProps = {
  mode: "single" | "range";
};

const DatePicker = ({ mode }: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | DateRange | undefined>(
    mode === "range"
      ? { from: new Date(), to: addDays(new Date(), 20) }
      : undefined
  );

  const handleOnSetToday = () => {
    if (mode === "range") {
      setDate({ from: new Date(), to: new Date() });
    } else {
      setDate(new Date());
    }
  };

  const handleOnCancel = () => {
    setDate(undefined);
  };

  const handleOnConfirm = () => {
    setOpen(false);
  };

  const formattedDate = () => {
    if (mode === "range" && date && "from" in date) {
      if (date.from && date.to) {
        return `${format(date.from, "yyyy년 MM월 dd일")} ~ ${format(
          date.to,
          "yyyy년 MM월 dd일"
        )}`;
      } else if (date.from) {
        return format(date.from, "yyyy년 MM월 dd일");
      } else {
        return "YYYY.MM.DD";
      }
    }
    return date && !("from" in date)
      ? format(date, "yyyy년 MM월 dd일")
      : "YYYY.MM.DD";
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant={"datePicker"} className={cn(!date && "text-gray-4")}>
          {formattedDate()}
          <Icon type="calendar" className="text-gray-9" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="" align="start">
        {mode === "range" ? (
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date && "from" in date ? date.from : undefined}
            selected={date as DateRange}
            onSelect={(value) => setDate(value)}
            numberOfMonths={2}
          />
        ) : (
          <Calendar
            mode="single"
            selected={date as Date}
            onSelect={(value) => setDate(value)}
            initialFocus
          />
        )}
        <div className="flex items-center justify-between flex-wrap gap-[.8rem] pt-[1.6rem] mt-[1.6rem] border-t border-gray-1">
          <Button
            variant={"ghost"}
            size={"sm"}
            className={"gap-[.4rem] mr-auto"}
            onClick={handleOnSetToday}
          >
            <Icon type="time" />
            오늘
          </Button>
          <Button variant={"outline"} size={"sm"} onClick={handleOnCancel}>
            취소
          </Button>
          <Button variant={"secondary1"} size={"sm"} onClick={handleOnConfirm}>
            확인
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
