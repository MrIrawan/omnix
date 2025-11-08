export function HorizontalInputWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-row gap-3 items-start">{children}</div>
  );
}
