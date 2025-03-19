import { cn } from "@/lib/utils";
import { Icon } from "./Icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (type: "plus" | "minus") => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-[.4rem] w-max">
      <Button
        variant={"outline"}
        size={"xs"}
        className="p-[.7rem] rounded-full"
        onClick={() => handleCount("minus")}
      >
        <Icon type="minus" />
      </Button>
      <Input
        type="number"
        className={cn(
          "text-center p-0 w-[3.2rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        )}
        value={count}
      />
      <Button
        variant={"outline"}
        size={"xs"}
        className="p-[.7rem] rounded-full"
        onClick={() => handleCount("plus")}
      >
        <Icon type="plus" />
      </Button>
    </div>
  );
};

export default Counter;
