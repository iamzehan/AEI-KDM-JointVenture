'use client'
import { Noto_Sans_Bengali } from "next/font/google";
import clsx from "clsx";
import { text } from "@/lib/header";


const notoSansBengali = Noto_Sans_Bengali({
  weight: ["400", "700"], // Specify desired weights
  subsets: ["bengali"], // Crucial for Bangla character support
  variable: "--font-noto-sans-bengali", // Optional CSS variable
  display: "swap",
});

export default function Heading() {
  return (
    <div className="md:absolute z-12 h-fit w-full top-0 left-0 md:top-auto md:bottom-0 md:left-0 p-3 flex flex-col md:backdrop-blur-xs md:bg-zinc-950/60">
      <p className="text-2xl text-sky-600 md:text-white md:text-shadow-lg font-bold">
        {text.eng}
      </p>
      <p
        className={clsx(
          [notoSansBengali.className],
          ["text-blue-400 md:text-xl md:text-white md:text-shadow-lg"]
        )}
      >
        {text.ban}
      </p>
    </div>
  );
}
