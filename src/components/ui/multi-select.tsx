import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandItem,
  CommandEmpty,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Command as CommandPrimitive } from "cmdk";
import React, {
  KeyboardEvent,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useState,
} from "react";
import { Icon } from "../Icons";
import { cva, VariantProps } from "class-variance-authority";
import Chip from "../Chip";

interface MultiSelectorProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive> {
  values: string[];
  onValuesChange: (value: string[]) => void;
  loop?: boolean;
  options: { label: string; value: string }[];
}

interface MultiSelectContextProps {
  value: string[];
  options: { label: string; value: string }[];
  onValueChange: (value: any) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  ref: React.RefObject<HTMLInputElement>;
  handleSelect: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const MultiSelectContext = createContext<MultiSelectContextProps | null>(null);

const useMultiSelect = () => {
  const context = useContext(MultiSelectContext);
  if (!context) {
    throw new Error("useMultiSelect must be used within MultiSelectProvider");
  }
  return context;
};

/**
 * MultiSelect Docs: {@link: https://shadcn-extension.vercel.app/docs/multi-select}
 */

// TODO : expose the visibility of the popup

const MultiSelector = ({
  values: value,
  onValuesChange: onValueChange,
  loop = false,
  className,
  children,
  dir,
  options,
  ...props
}: MultiSelectorProps) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isValueSelected, setIsValueSelected] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const onValueChangeHandler = useCallback(
    (val: string) => {
      if (value.includes(val)) {
        onValueChange(value.filter((item) => item !== val));
      } else {
        onValueChange([...value, val]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  const handleSelect = React.useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      e.preventDefault();
      const target = e.currentTarget;
      const selection = target.value.substring(
        target.selectionStart ?? 0,
        target.selectionEnd ?? 0
      );

      setSelectedValue(selection);
      setIsValueSelected(selection === inputValue);
    },
    [inputValue]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation();
      const target = inputRef.current;

      if (!target) return;

      const moveNext = () => {
        const nextIndex = activeIndex + 1;
        setActiveIndex(
          nextIndex > value.length - 1 ? (loop ? 0 : -1) : nextIndex
        );
      };

      const movePrev = () => {
        const prevIndex = activeIndex - 1;
        setActiveIndex(prevIndex < 0 ? value.length - 1 : prevIndex);
      };

      const moveCurrent = () => {
        const newIndex =
          activeIndex - 1 <= 0
            ? value.length - 1 === 0
              ? -1
              : 0
            : activeIndex - 1;
        setActiveIndex(newIndex);
      };

      switch (e.key) {
        case "ArrowLeft":
          if (dir === "rtl") {
            if (value.length > 0 && (activeIndex !== -1 || loop)) {
              moveNext();
            }
          } else {
            if (value.length > 0 && target.selectionStart === 0) {
              movePrev();
            }
          }
          break;

        case "ArrowRight":
          if (dir === "rtl") {
            if (value.length > 0 && target.selectionStart === 0) {
              movePrev();
            }
          } else {
            if (value.length > 0 && (activeIndex !== -1 || loop)) {
              moveNext();
            }
          }
          break;

        case "Backspace":
        case "Delete":
          if (value.length > 0) {
            if (activeIndex !== -1 && activeIndex < value.length) {
              onValueChangeHandler(value[activeIndex]);
              moveCurrent();
            } else {
              if (target.selectionStart === 0) {
                if (selectedValue === inputValue || isValueSelected) {
                  onValueChangeHandler(value[value.length - 1]);
                }
              }
            }
          }
          break;

        case "Enter":
          setOpen(true);
          break;

        case "Escape":
          if (activeIndex !== -1) {
            setActiveIndex(-1);
          } else if (open) {
            setOpen(false);
          }
          break;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, inputValue, activeIndex, loop]
  );

  return (
    <MultiSelectContext.Provider
      value={{
        options,
        value,
        onValueChange: onValueChangeHandler,
        open,
        setOpen,
        inputValue,
        setInputValue,
        activeIndex,
        setActiveIndex,
        ref: inputRef,
        handleSelect,
      }}
    >
      <Command
        onKeyDown={handleKeyDown}
        className={cn(
          "overflow-visible bg-transparent flex flex-col space-y-2",
          className
        )}
        dir={dir}
        {...props}
      >
        {children}
      </Command>
    </MultiSelectContext.Provider>
  );
};

const MultiSelectorTrigger = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { value, onValueChange, activeIndex, options, open } = useMultiSelect();

  const mousePreventDefault = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center px-[1.2rem] w-max min-w-[32rem] py-[.4rem] gap-[.4rem] rounded-lg border border-input bg-white text-base outline-none transition-colors border-gray-2 [&:disabled]:cursor-not-allowed [&:disabled]:bg-gray-0 [&:disabled_svg]:text-gray-4 [&>span]:line-clamp-1",
        className
      )}
      {...props}
    >
      {value.map((item, index) => (
        <button
          key={item}
          aria-label={`Remove ${item} option`}
          aria-roledescription="button to remove option"
          type="button"
          onMouseDown={mousePreventDefault}
          onClick={() => onValueChange(item)}
        >
          <Badge
            className={cn(
              "flex items-center px-[1.2rem] py-[.6rem] rounded-xl bg-secondary-8 text-white",
              activeIndex === index && "ring-2 ring-muted-foreground "
            )}
            variant={"secondary"}
          >
            <span className="text-sm">
              {options.find((option) => option.value === item)?.label}
            </span>
          </Badge>
        </button>
      ))}
      {children}
      <Icon
        type="arrowFillDown"
        className={cn("text-black", open && "rotate-180 transition-transform")}
      />
    </div>
  );
});

MultiSelectorTrigger.displayName = "MultiSelectorTrigger";

const MultiSelectorInput = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
  const {
    setOpen,
    inputValue,
    setInputValue,
    activeIndex,
    setActiveIndex,
    handleSelect,
    ref: inputRef,
  } = useMultiSelect();

  return (
    <CommandPrimitive.Input
      {...props}
      tabIndex={0}
      ref={inputRef}
      value={inputValue}
      onValueChange={activeIndex === -1 ? setInputValue : undefined}
      onSelect={handleSelect}
      onBlur={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onClick={() => setActiveIndex(-1)}
      className={cn(
        "ml-2 py-[.6rem] text-md outline-none placeholder:text-muted-foreground flex-1",
        className,
        activeIndex !== -1 && "caret-transparent"
      )}
    />
  );
});

MultiSelectorInput.displayName = "MultiSelectorInput";

const MultiSelectorContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children }, ref) => {
  const { open } = useMultiSelect();
  return (
    <div ref={ref} className="relative w-max min-w-[32rem]">
      {open && children}
    </div>
  );
});
MultiSelectorContent.displayName = "MultiSelectorContent";

const CommandListVariants = cva(
  "absolute z-10 top-0 w-full max-h-[24rem] min-w-[8rem] flex flex-col overflow-y-auto overflow-x-hidden rounded-md bg-white border border-secondary-2 shadow-md scrollbar-thin scrollbar-track-transparent transition-colors scrollbar-thumb-muted-foreground dark:scrollbar-thumb-muted scrollbar-thumb-rounded-lg",
  {
    variants: {
      variant: {
        default: "",
        chip: "[&_div]:flex [&_div]:flex-wrap",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const MultiSelectorList = forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> &
    VariantProps<typeof CommandListVariants>
>(({ className, variant, children }, ref) => {
  return (
    <CommandList
      ref={ref}
      className={cn(CommandListVariants({ variant, className }))}
    >
      {children}
      <CommandEmpty>
        <span className="text-muted-foreground">No results found</span>
      </CommandEmpty>
    </CommandList>
  );
});
MultiSelectorList.displayName = "MultiSelectorList";

const MultiSelectorItemVariants = cva(
  "flex justify-between rounded-md cursor-pointer py-[1.3rem] px-[1.6rem] text-sm transition-colors hover:bg-primary-cyan-light [&_svg]:size-[2.4rem]",
  {
    variants: {
      variant: {
        default: "",
        chip: "[&_div]:flex [&_div]:flex-wrap",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
const MultiSelectorItem = forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  { value: string } & React.ComponentPropsWithoutRef<
    typeof CommandPrimitive.Item
  > &
    VariantProps<typeof MultiSelectorItemVariants>
>(({ className, value, children, variant, ...props }, ref) => {
  const { value: Options, onValueChange, setInputValue } = useMultiSelect();

  const mousePreventDefault = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const isIncluded = Options.includes(value);
  return (
    <>
      {variant && variant === "chip" ? (
        <CommandItem
          ref={ref}
          {...props}
          onSelect={() => {
            onValueChange(value);
            setInputValue("");
          }}
          onMouseDown={mousePreventDefault}
        >
          <Chip variant="option" on={isIncluded}>
            {children}
          </Chip>
        </CommandItem>
      ) : (
        <CommandItem
          ref={ref}
          {...props}
          onSelect={() => {
            onValueChange(value);
            setInputValue("");
          }}
          className={cn(
            MultiSelectorItemVariants({ className }),
            isIncluded && "cursor-default",
            props.disabled && "bg-gray-0 cursor-not-allowed"
          )}
          onMouseDown={mousePreventDefault}
        >
          {children}
          {isIncluded && <Icon type="check" className="text-primary-cyan" />}
        </CommandItem>
      )}
    </>
  );
});

MultiSelectorItem.displayName = "MultiSelectorItem";

export {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
};
