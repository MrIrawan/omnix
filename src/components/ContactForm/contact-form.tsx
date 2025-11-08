"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { SendHorizonal } from "lucide-react";

export function ContactForm() {
  return (
    <Card className="w-full bg-white rounded-md shadow-none border-none">
      <CardContent className="gap-6">
        <form className="w-full flex flex-col gap-4" method="post">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-3">
              <div className="w-full flex flex-col gap-1">
                <Label htmlFor="full_name" className="font-semibold text-sm">
                  Full name
                </Label>
                <Input
                  type="text"
                  id="full_name"
                  name="full_name"
                  className="placeholder:text-muted-foreground placeholder:font-medium placeholder:text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label htmlFor="full_name" className="font-semibold text-sm">
                  Full name
                </Label>
                <Input
                  type="text"
                  id="email_address"
                  name="email_address"
                  className="placeholder:text-muted-foreground placeholder:font-medium placeholder:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-3">
              <div className="w-full flex flex-col gap-1">
                <Label
                  htmlFor="company_or_organization"
                  className="font-semibold text-sm"
                >
                  Company or Organization
                </Label>
                <Input
                  type="text"
                  id="company_or_organization"
                  name="company_or_organization"
                  className="placeholder:text-muted-foreground placeholder:font-medium placeholder:text-sm"
                  placeholder="company or organization name"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label htmlFor="phone_number" className="font-semibold text-sm">
                  Phone number
                </Label>
                <Input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  className="placeholder:text-muted-foreground placeholder:font-medium placeholder:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="omnix_service" className="text-sm font-semibold">
              Choose omnix service
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="service_1">Service 1</SelectItem>
                <SelectItem value="service_2">Service 2</SelectItem>
                <SelectItem value="service_3">Service 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="message_text" className="text-sm font-semibold">
              Tell us about your business inquiries
            </Label>
            <Textarea className="text-base font-normal text-black min-h-[200px] resize-none" />
          </div>
          <div className="flex flex-row items-center">
            <Button
              className="w-full bg-indigo-600 group transition-all duration-300 ease-in-out hover:bg-indigo-800 py-5"
              size={"icon-lg"}
            >
              <span className="flex flex-row items-center gap-1">
                <p className="text-white font-semibold text-base">
                  send your message
                </p>
                <SendHorizonal className="size-5 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
