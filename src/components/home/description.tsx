"use client";
import clsx from "clsx";
import QuickNav from "./quick-nav";
import { description } from "@/lib/header";

interface Text {
  font:{className: string;}
}
export default function Description({font}: Text) {
  return (
    <div className="
    my-10 p-3 md:p-10 flex 
    flex-col gap-10 
    md:static text-justify 
    h-full w-full bg-gray-500/10 md:shadow-lg md:rounded-lg
    ">
      <p className="text-xl md:text-shadow-lg font-bold">
        {description.eng}
      </p>
      <p
        className={clsx(
          [font.className],
          ["text-xl md:text-shadow-lg"]
        )}
      >
        {description.ban}
      </p>
      <QuickNav/>
    </div>
  );
}
