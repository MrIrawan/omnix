import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { SelectGroupProp } from "@/types/types";

export function SelectGroup({
  label,
  htmlFor,
  className,
  options,
  placeholder,
  ...props
}: SelectGroupProp) {
  return (
    <div className="w-full flex flex-col gap-1">
      <Label htmlFor={htmlFor} className="text-sm font-semibold text-black">
        {label}
      </Label>
      <Select {...props}>
        <SelectTrigger className={cn("w-full", className)}>
          <SelectValue
            placeholder={placeholder || "Select an option"}
            className="text-base font-medium text-muted-foreground"
          />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
