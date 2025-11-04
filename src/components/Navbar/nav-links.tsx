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
        const Icon = (link.href===pathname)?link.iconFilled:link.icon;

        return (
          <Link
            key={index}
            href={link.href}
            prefetch={true}
            onClick={() => click?.()}
            className={clsx(
              "w-full px-10 md:px-2 py-2 md:rounded transition-colors duration-300 flex gap-4 md:gap-2 items-center justify-between md:justify-center",
              {
                "text-blue-600 font-bold bg-blue-300": pathname === link.href,
                "text-blue-950 font-bold hover:text-lime-600 hover:cursor-pointer":
                  pathname !== link.href,
              }
            )}
          >
            <Icon fontSize="small" />
            <span className="w-full">{link.label}</span>
          </Link>
        );
      })}
    </>
  );
}
