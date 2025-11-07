export default function ContactPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full pt-36 pb-16">
      <div className="container mx-auto">
        <div className="w-full rounded-xl bg-gray-100 p-3 flex items-center justify-between gap-0">
          {children}
        </div>
      </div>
    </section>
  );
}
