"use client";

import { useForm, SubmitHandler } from "react-hook-form";

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
import { ContactUsData } from "@/types/types";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsData>();

  const onSubmit: SubmitHandler<ContactUsData> = (data) => {
    console.log(data);
  };

  return (
    <Card className="w-full bg-white rounded-md shadow-none border-none">
      <CardContent className="gap-6">
        <form
          className="w-full flex flex-col gap-4"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <HorizontalInputWrapper>
            <InputGroup
              label="Full name"
              htmlFor="full_name"
              className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
              placeholder="ex: Jhon Doe"
              errorMsg={errors.full_name?.message}
              required
              aria-invalid={errors.full_name ? "true" : "false"}
              {...register("full_name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Full name must be at least 3 characters",
                },
              })}
            />
            <InputGroup
              label="Email address"
              htmlFor="email_address"
              className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
              placeholder="ex: jhondoe@email.com"
              errorMsg={errors.email_address?.message}
              required
              aria-invalid={errors.email_address ? "true" : "false"}
              {...register("email_address", {
                required: "Email address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </HorizontalInputWrapper>
          <HorizontalInputWrapper>
            <InputGroup
              label="Company or Organization"
              htmlFor="company_or_organization"
              className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
              placeholder="PT. Omnix Indonesia"
              errorMsg={errors.company_or_organization?.message}
              required
              aria-invalid={errors.company_or_organization ? "true" : "false"}
              {...register("company_or_organization", {
                required: "Company or Organization is required",
                minLength: {
                  value: 3,
                  message:
                    "Company or Organization must be at least 3 characters",
                },
              })}
            />
            <InputGroup
              label="Phone number"
              htmlFor="phone_number"
              className="placeholder:text-black/50 placeholder:text-sm placeholder:font-medium"
              placeholder="ex: +62 8123456789"
              errorMsg={errors.phone_number?.message}
              required
              aria-invalid={errors.phone_number ? "true" : "false"}
              {...register("phone_number", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 characters",
                },
              })}
            />
          </HorizontalInputWrapper>
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="omnix_service" className="text-sm font-semibold">
              Choose omnix service
            </Label>
            <Select {...register("omnix_service")}>
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
            required
            aria-invalid={errors.message_text ? "true" : "false"}
            {...register("message_text", {
              required: "Message text is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
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
