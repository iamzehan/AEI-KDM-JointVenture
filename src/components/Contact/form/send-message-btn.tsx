"use client";
import clsx from "clsx";
import Icon from "../../icons";
import { useState } from "react";
export default function Send() {
  const [visible, setVisibility] = useState(false);

  function handleVisibility() {
    setVisibility((prev) => !prev);
  }
  return (
    <button
      className="
    z-50 self-end md:self-auto
    relative
    flex gap-2 justify-center items-center w-fit aspect-square md:aspect-auto rounded-full
    bg-lime-600 py-2 px-4 md:rounded-md 
    text-white text-shadow-md font-bold
    transiton-all duration-500 ease
    hover:cursor-pointer
    hover:bg-lime-700 hover:shadow-md/20 hover:shadow-lime-200
    "
      onMouseEnter={() => handleVisibility()}
      onMouseOut={() => handleVisibility()}
      type="button"
    >
      <span className="hidden md:block">Send</span>
      <Icon name="Send" size="small" className="md:animate-lr drop-shadow-md" />
      <div
        className={clsx(
          ["hidden absolute animate-pulse p-1 bg-red-500 top-0 right-0 rounded-full"],
          {
            ["md:hidden"]: !visible,
            ["md:block"]:visible
          }
        )}
      ></div>
    </button>
  );
}
