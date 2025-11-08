import { HorizontalInputWrapperProps } from "@/types/types";

export function HorizontalInputWrapper({
  children,
  errorMsg,
}: HorizontalInputWrapperProps) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="w-full flex flex-row gap-3">{children}</div>
      {errorMsg && (
        <p className="text-xs font-medium text-red-500">{errorMsg}</p>
      )}
    </div>
  );
}
