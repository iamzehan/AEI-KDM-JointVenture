"use client";
import { links } from "@/lib/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks({ click }: { click?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => {
        const Icon = link.icon; // ✅ Capitalized to use as component
        return (
          <li
            key={index}
            className={clsx(
              "w-full px-4 py-2 md:rounded transition-colors duration-300 flex gap-4 items-center justify-between px-10 md:px-2 md:justify-center md:gap-2",
              {
                "text-blue-600 font-bold bg-blue-300": pathname === link.href,
                "text-blue-950 font-bold hover:text-lime-600 hover:cursor-pointer": pathname !== link.href,
              }
            )}
            onClick={() => click?.()}
          >
            <Icon fontSize="small" /> {/* ✅ Render correctly */}
            <Link className="h-full w-full text-left" href={link.href} onClick={() => click?.()}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
}
