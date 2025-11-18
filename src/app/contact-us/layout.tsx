import { InputGroup } from "@/components/InputGroup/input-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full pt-36 pb-16">
      <div className="container mx-auto flex flex-col gap-0">
        <div className="w-full rounded-xl rounded-b-none bg-gray-100 p-3 flex items-start justify-between gap-0">
          {children}
        </div>
        <div className="w-full h-[300px] bg-black rounded-xl rounded-t-none flex flex-row gap-3 justify-center items-center">
          <div className="w-full max-w-[996px] flex flex-col gap-6">
            <h2 className="text-white font-bold text-4xl max-w-3xl">
              Get all of our updates directly to your inbox. Sign up for our
              newsletter.
            </h2>
            <p className="text-white font-normal text-base max-w-xl">
              Lorem ipsum elit nascetur sed a elit et ullamcorper pretium
              elementum aenean lectus tincidunt nibh ut pellentesque pulvinar
              ipsum at.
            </p>
            <div className="flex flex-row items-center justify-start gap-3 w-fit">
              <Input
                type="email"
                className="bg-white placeholder:text-sm placeholder:font-medium focus-visible:border-indigo-100 focus-visible:ring-indigo-600 focus-visible:ring-[3px]"
                placeholder="Enter your email address"
              />
              <Button
                variant={"default"}
                size={"default"}
                className="bg-indigo-600 text-white px-6 hover:bg-indigo-950 active:bg-indigo-800"
              >
                subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
