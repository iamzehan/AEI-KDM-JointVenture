"use client";
import { cards } from "@/lib/Cards";

export default function Cards() {
  return (
    <div className="
    // mobile
    p-2 flex flex-col flex-grow gap-3 w-8/10
    // others 
    md:p-5 md:gap-5 md:flex-row self-center justify-center">
      {cards.map((card, index) => {
        return (
          <span key={index} className="
          text-blue-950
          hover:cursor-pointer
          hover:text-lime-600
          p-5 rounded-lg shadow-lg/20 shadow-zinc-300
          border-t-1 border-zinc-300 hover:border-lime-600
          hover:shadow-lime-600 transition-all duration-300 ease">
            <p className="font-bold">{card.title}</p>
            <p className="text-xs text-gray-500">{card.subtitle}</p>
          </span>
        );
      })}
    </div>
  );
}
