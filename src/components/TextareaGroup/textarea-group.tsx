import { cn } from "@/lib/utils";

import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { TextareaGroupProps } from "@/types/types";

export function TextareaGroup({
  label,
  htmlFor,
  className,
  ...props
}: TextareaGroupProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <Label className="text-sm font-semibold text-black" htmlFor={htmlFor}>
        {label === undefined ? "Textarea Group" : label}
      </Label>
      <Textarea
        className={cn(
          "resize-none focus-visible:border-indigo-600 focus-visible:ring-indigo-100 focus-visible:ring-[3px] rounded-sm",
          className
        )}
        {...props}
      />
    </div>
  );
}
