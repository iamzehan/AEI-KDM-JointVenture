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
    p-3 md:p-10 flex 
    flex-col gap-10 
    md:static text-justify md:text-xl 
    h-full w-full bg-gray-500/10 md:shadow-lg md:rounded-lg
    ">
      <p className="md:text-shadow-lg font-bold">
        {description.eng}
      </p>
      <p
        className={clsx(
          [font.className],
          ["md:text-shadow-lg"]
        )}
      >
        {description.ban}
      </p>
      <QuickNav/>
    </div>
  );
}
