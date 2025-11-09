"use client";

import { useRef } from "react";
import { useRequired } from "@/hooks/use-required";

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { isRequired } = useRequired(textareaRef);

  return (
    <div className="w-full flex flex-col gap-1">
      <Label
        className="text-sm font-semibold text-black gap-0.5"
        htmlFor={htmlFor}
      >
        {label === undefined ? "Textarea Group" : label}
        {isRequired && <span className="text-destructive">*</span>}
      </Label>
      <Textarea
        className={cn(
          "resize-none focus-visible:border-indigo-600 focus-visible:ring-indigo-100 focus-visible:ring-[3px] rounded-sm",
          className
        )}
        ref={textareaRef}
        {...props}
      />
    </div>
  );
}
