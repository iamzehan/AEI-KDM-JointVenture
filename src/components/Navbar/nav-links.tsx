"use client";
import { links } from "@/lib/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks({ click }: { click?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <li
          key={index}
          className={clsx(
            "w-full px-4 py-2 rounded transition-colors duration-300 flex justify-center",
            {
              "text-lime-600 font-bold bg-lime-300": pathname === link.href,
              "text-blue-950 font-bold hover:text-lime-600": pathname !== link.href,
            }
          )}
        >
          <Link href={link.href} onClick={() => click && click()}>
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
