"use client";
import Link from "next/link";
export default function QuickNav() {
  return (
    <div
      className="z-50 sticky py-6 px-5 
        rounded-lg border-1 border-zinc-950 
        bottom-0 top-auto bg-zinc-950/80 
        backdrop-blur-xs flex justify-between 
        self-center gap-5
        "
    >
      <Link href="/projects">
        <span
          className="transition-color
        duration-500 
        bg-zinc-950 
        hover:text-lime-600 
        hover:border-lime-600 
        px-5 py-3 
        border rounded-lg"
        >
          Explore Projects
        </span>
      </Link>
      <Link href="#">
        <span
        className="bg-lime-600
        px-5 py-2 
        rounded
        hover:bg-zinc-950
        hover:text-lime-600 
        hover:border-lime-600 
        px-5 py-3 
        border rounded-lg"
        >
          Get Involved
        </span>
      </Link>
    </div>
  );
}
