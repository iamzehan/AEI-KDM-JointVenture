"use client";
import ScrollToTop from "@/lib/scroll-to-top";
import Link from "next/link";
import Icon from "../icons";
export default function QuickNav() {
  const handleLinkClick = () => {
    ScrollToTop();
  };

  return (
    <div
      className="z-40 sticky py-6 px-5 
        rounded-full
        bottom-0 top-auto dark:bg-zinc-950/80 
        backdrop-blur-xs flex justify-between 
        self-center gap-5
        inset-shadow-2xs inset-shadow-zinc-800/20
        shadow-lg
        text-xs font-bold

        md:bg-white
        md:dark:bg-zinc-950
        md:rounded-xl
        "
    >
      <Link href="/projects" onClick={handleLinkClick}>
        <span
          className="
        text-white
        transition-color
        duration-500 
        bg-zinc-950 
        hover:text-lime-600 
        hover:border-lime-600 
        px-5 py-3 
        border rounded-lg"
        >
          Explore Projects <Icon name='Cases' className="animate-bounce text-green-400" size='small'/>
        </span>
      </Link>
      <Link href="/contact" onClick={handleLinkClick}>
        <span
        className="
        text-white
        bg-lime-600
        px-5 py-2 
        rounded
        hover:bg-zinc-950
        hover:text-lime-600 
        hover:border-lime-600 
        px-5 py-3 
        border rounded-lg"
        >
          Get Involved <Icon name='ArrowForward' size='small' className="pb-1 animate-lr"/>
        </span>
      </Link>
    </div>
  );
}
