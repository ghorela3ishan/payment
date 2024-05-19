import { ReactNode } from "react";

export type TTabs = {
  items: Record<string, number | string>[];
  activeLabelId: number;
  handleClick: (id: number) => void;
  children: ReactNode;
};
