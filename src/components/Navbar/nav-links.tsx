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
        const Icon = link.href === pathname ? link.iconFilled : link.icon;

        return (
          <Link
            key={index}
            href={link.href}
            prefetch={true}
            onClick={() => click?.()}
            className={clsx(
              "h-full w-full px-10 md:px-2 py-2 md:rounded transition-colors duration-300 flex gap-4 md:gap-2 items-center justify-between md:justify-center",
              {
                "text-lime-600 md:text-blue-600 font-bold bg-lime-200/90 md:bg-blue-300":
                  pathname === link.href,
                "text-white dark:text-white md:text-blue-950 md:text-shadow-none text-shadow-lg font-bold hover:text-white md:hover:text-lime-600 hover:cursor-pointer":
                  pathname !== link.href,
              },
              {
                ["border-b dark:border-zinc-950/60 md:border-none"]: index<links.length-1 && pathname!==link.href,
              }
            )}
          >
            <Icon fontSize="small" className={clsx(["text-shadow-md transition-all duration-300"], {
              ["scale-110"]:pathname===link.href
            })}/>
            <span className="w-full ">{link.label}</span>
          </Link>
        );
      })}
    </>
  );
}
