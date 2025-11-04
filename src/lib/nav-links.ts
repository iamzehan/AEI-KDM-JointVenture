// lib/nav-links.ts
import * as icons from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

interface NavLink {
  href: string;
  label: string;
  icon: SvgIconComponent; 
  iconFilled: SvgIconComponent;
}

export const links: NavLink[] = [
  {
    label: "Home",
    href: "/",
    icon: icons.HomeOutlined,
    iconFilled: icons.Home
  },
  {
    label: "Blog",
    href: "/blogs",
    icon: icons.NotesOutlined,
    iconFilled: icons.Notes
  },
  {
    label: "Projects",
    href: "/projects",
    icon: icons.EngineeringOutlined,
    iconFilled: icons.Engineering
  },
  {
    label: "About",
    href: "/about",
    icon: icons.BusinessOutlined,
    iconFilled: icons.Business
  },
];