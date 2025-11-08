"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ScrollToTop from "@/lib/scroll-to-top";
import Link from "next/link";
import Icon from "../icons";

export default function QuickNav() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      requestAnimationFrame(() => {
        setMounted(true);
      });
    },[]);
  const handleLinkClick = () => {
    ScrollToTop();
  };

  return (
    <div
      className={clsx(
        "z-40 sticky py-6 px-5 rounded-full bottom-1 top-auto dark:bg-zinc-950/80 backdrop-blur-xs flex justify-between self-center gap-2 xl:gap-2 md:gap-5 inset-shadow-2xs inset-shadow-zinc-800/20 shadow-lg text-xs font-bold md:bg-white md:dark:bg-zinc-950 md:rounded-xl origin-center transition-all duration-500 ease-out",
        {
          ["opacity-0 md:opacity-100 md:translate-y-0 translate-y-10"]: !mounted,
          ["opacity-100 translate-y-0"]:mounted,
        }
      )}
    >
      <Link href="/projects" onClick={handleLinkClick}>
        <span className="text-white transition-colors duration-500 bg-zinc-950 hover:text-lime-600 hover:border-lime-600 px-5 py-3 border rounded-lg">
          Explore Projects{" "}
          <Icon
            name="Cases"
            className="animate-bounce text-green-400"
            size="small"
          />
        </span>
      </Link>

      <Link href="/contact" onClick={handleLinkClick}>
        <span className="text-white bg-lime-600 px-5 py-3 rounded-lg border hover:bg-zinc-950 hover:text-lime-600 hover:border-lime-600">
          Get Involved{" "}
          <Icon name="ArrowForward" size="small" className="pb-1 animate-lr" />
        </span>
      </Link>
    </div>
  );
}
