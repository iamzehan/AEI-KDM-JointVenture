// lib/nav-links.ts
import * as icons from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

interface NavLink {
  href: string;
  label: string;
  icon: SvgIconComponent; 
}

export const links: NavLink[] = [
  {
    label: "Home",
    href: "/",
    icon: icons.Home,
  },
  {
    label: "Blog",
    href: "/blogs",
    icon: icons.Notes,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: icons.Engineering,
  },
  {
    label: "About",
    href: "/about",
    icon: icons.BusinessCenter,
  },
];