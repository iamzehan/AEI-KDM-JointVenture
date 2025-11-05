"use client";
import { cards } from "@/lib/Cards";

export default function Cards() {
  return (
    <div className="
    // mobile
    flex flex-col gap-3 w-full
    items-center justify-center py-10
    // others 
    md:px-15 md:py-25 md:gap-5 md:flex-row">
      {cards.map((card, index) => {
        return (
          <span key={index} className="
          w-8/10 md:w-fit
          text-blue-950 dark:text-white
          hover:cursor-pointer
          hover:text-lime-600
          p-5 rounded-lg shadow-md/20 shadow-zinc-300
          border-t-1 border-l-1 border-r-1 border-zinc-300/50 hover:border-lime-600/20
          hover:shadow-lime-600 transition-all duration-300 ease">
            <p className="font-bold">{card.title}</p>
            <p className="text-xs text-gray-500">{card.subtitle}</p>
          </span>
        );
      })}
    </div>
  );
}
