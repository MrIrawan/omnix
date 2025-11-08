import { cn } from "@/lib/utils";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { InputGroupProps } from "@/types/types";

export function InputGroup({
  label,
  htmlFor,
  className,
  errorMsg,
  ...props
}: InputGroupProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <Label
        className="text-sm font-semibold text-black"
        htmlFor={htmlFor === undefined ? "input-group" : htmlFor}
      >
        {label === undefined ? "Label" : label}
      </Label>
      <Input
        className={cn(
          "focus-visible:border-indigo-600 focus-visible:ring-indigo-100 focus-visible:ring-[3px] rounded-sm",
          className
        )}
        id={htmlFor}
        name={htmlFor}
        {...props}
      />
      {errorMsg && (
        <p className="text-sm font-medium text-destructive">{errorMsg}</p>
      )}
    </div>
  );
}
