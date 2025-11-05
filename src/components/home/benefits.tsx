"use client";
import { benefits } from "@/lib/benefits";
export default function Benefits() {
  return (
    <div className="
    w-full p-10 flex flex-col justify-center text-shadow-sm
    gap-2 bg-gray-500/10 text-gray-500 md:rounded-lg md:shadow-lg
    ">
      <span className="font-bold text-xl">Key benefits</span>
      <ul className="list-disc ml-5">
        {benefits.map((benefit, index) => {
          return (<li key={index}>{benefit}</li>)
        })}
      </ul>
    </div>
  );
}