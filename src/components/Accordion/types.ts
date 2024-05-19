import { ReactNode } from "react";

export type TAccordion = {
  heading: string;
  children: ReactNode;
  handleClick: () => void;
  isOpen: boolean;
  footerText?: string;
  footerCta?: string;
};
