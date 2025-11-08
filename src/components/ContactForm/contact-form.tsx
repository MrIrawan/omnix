"use client";

import { InputGroup } from "../InputGroup/input-group";
import { TextareaGroup } from "../TextareaGroup/textarea-group";
import { HorizontalInputWrapper } from "../HorizontalInputWrapper/horizontal-input-wrapper";

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
import { SendHorizonal } from "lucide-react";

export function ContactForm() {
  return (
    <Card className="w-full bg-white rounded-md shadow-none border-none">
      <CardContent className="gap-6">
        <form className="w-full flex flex-col gap-4" method="post">
          <HorizontalInputWrapper>
            <InputGroup
              label="Full name"
              htmlFor="full_name"
              className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
              placeholder="ex: Jhon Doe"
            />
            <InputGroup
              label="Email address"
              htmlFor="email_address"
              className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
              placeholder="ex: jhondoe@email.com"
            />
          </HorizontalInputWrapper>
          <HorizontalInputWrapper>
            <InputGroup
              label="Company or Organization"
              htmlFor="company_or_organization"
              className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
              placeholder="PT. Omnix Indonesia"
            />
            <InputGroup
              label="Phone number"
              htmlFor="phone_number"
              className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
              placeholder="ex: +62 8123456789"
            />
          </HorizontalInputWrapper>
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
          <TextareaGroup
            label="Tell us about your business inquiries"
            htmlFor="message_text"
            className="text-base font-normal text-black min-h-[200px] resize-none"
          />
          <div className="flex flex-row items-center">
            <Button
              className="w-full bg-indigo-600 group transition-all duration-300 ease-in-out hover:bg-indigo-800 py-5 h-12"
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
