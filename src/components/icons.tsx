'use client';
import * as MaterialIcon from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type IconName = keyof typeof MaterialIcon;

interface IconProps {
  name: IconName;
  size?: SvgIconProps["fontSize"];
  className?:string;
}

export default function Icon({ name, size = "medium", className }: IconProps) {
  const SelectedIcon = (MaterialIcon as Record<IconName, React.ElementType>)[name as IconName];

  if (!SelectedIcon) {
    console.warn(`Icon "${name}" not found in @mui/icons-material`);
    return null;
  }

  return <SelectedIcon fontSize={size} className={className} color="inherit"/>;
}