interface NavLink {
  href: string
  label: string
}
export const links: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blogs",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
  },
];
