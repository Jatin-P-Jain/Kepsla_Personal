import { ReactNode } from "react";

export interface MenuItem {
  text: string;
  icon?: ReactNode;
  path: string;
  children?: MenuItem[]; // For nested items
}
