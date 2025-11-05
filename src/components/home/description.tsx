"use client";
import clsx from "clsx";
import QuickNav from "./quick-nav";
import { description } from "@/lib/header";

interface Text {
  font:{className: string;}
}
export default function Description({font}: Text) {
  return (
    <div className="my-10 px-5 flex flex-col gap-10 md:static text-justify h-fit w-full">
      <p className="text-xl md:text-shadow-lg font-bold">
        {description.eng}
      </p>
      <p
        className={clsx(
          [font.className],
          ["text-xl md:text-white md:text-shadow-lg"]
        )}
      >
        {description.ban}
      </p>
      <QuickNav/>
    </div>
  );
}
