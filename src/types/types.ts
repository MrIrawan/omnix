import * as SelectPrim from "@radix-ui/react-select";
import { LucideIcon } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export interface ContactUsData {
  full_name: string;
  company_or_organization: string;
  phone_number: string;
  email_address: string;
  omnix_service: string;
  message_text: string;
}

export interface PricingIconProps {
  variant: "starter" | "professional" | "enterprise";
}

export interface PricingCardProps {
  variant: "starter" | "professional" | "enterprise";
  title: string;
  description: string;
  price: string;
  listFeatures: string[];
}

export interface IndustryCardProps extends HTMLAttributes<HTMLDivElement> {
  Icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string | undefined;
}

export interface SolutionCardProps {
  title?: string;
  description?: string;
  href?: string;
  Icon?: LucideIcon;
  className?: string;
}

export interface CustomBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: "default" | "secondary" | "destructive" | "outline";
  children: React.ReactNode;
}

export interface FeaturesCardProps {
  index: number;
  title: string;
  description: string;
  image: string | StaticImport;
}

export interface FooterListItemProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  rating: number;
  testimonial: string;
}

export interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | undefined;
  htmlFor: string | undefined;
  className: string | undefined;
  errorMsg: string | React.ReactElement | undefined;
}

export interface TextareaGroupProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string | undefined;
  htmlFor: string | undefined;
  className: string | undefined;
}

export interface SelectGroupProp
  extends React.ComponentProps<typeof SelectPrim.Root> {
  label: string;
  htmlFor: string;
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
}
