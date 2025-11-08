"use client";

import { ContactForm } from "@/components/ContactForm/contact-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

export default function ContactUsPage() {
  return (
    <>
      <Card className="w-full bg-transparent shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-5xl font-bold text-black leading-snug">
            get in touch -- <span className="block">with us</span>
          </CardTitle>
          <CardDescription className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quia nobis quam iste reiciendis aspernatur pariatur nostrum
            architecto odio sed?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="w-full flex flex-col gap-6">
            <li className="w-full flex flex-row items-center gap-3">
              <span className="w-fit p-2.5 bg-indigo-100 flex flex-row items-center justify-center rounded-full">
                <MapPin className="text-indigo-600 size-7" />
              </span>
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-sm text-black">
                  lorem, ipsum.
                </h3>
                <p className="text-sm text-black/50 font-normal">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
              </div>
            </li>
            <li className="w-full flex flex-row items-center gap-3">
              <span className="w-fit p-2.5 bg-indigo-100 flex flex-row items-center justify-center rounded-full">
                <MapPin className="text-indigo-600 size-7" />
              </span>
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-sm text-black">
                  lorem, ipsum.
                </h3>
                <p className="text-sm text-black/50 font-normal">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
              </div>
            </li>
            <li className="w-full flex flex-row items-center gap-3">
              <span className="w-fit p-2.5 bg-indigo-100 flex flex-row items-center justify-center rounded-full">
                <MapPin className="text-indigo-600 size-7" />
              </span>
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-sm text-black">
                  lorem, ipsum.
                </h3>
                <p className="text-sm text-black/50 font-normal">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
      {/* contact form component */}
      <ContactForm />
    </>
  );
}
