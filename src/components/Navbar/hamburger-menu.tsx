"use client";
import clsx from 'clsx';

export default function HamburgerMenu({handleMenu, isOpen}:{handleMenu?:()=>void, isOpen:boolean}) {
  return (
    <button
      onClick={()=>handleMenu?.()}
      className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1 p-1"
    >
      <span
        className={clsx(
          "dark:bg-white block h-[2px] w-6 bg-blue-950 rounded transition-transform duration-300 origin-center",
          { "bg-lime-600 rotate-45 translate-y-[6px]": isOpen }
        )}
      />
      <span
        className={clsx(
          "dark:bg-white block h-[2px] w-6 bg-blue-950 rounded transition-opacity duration-300",
          { "opacity-0": isOpen }
        )}
      />
      <span
        className={clsx(
          "dark:bg-white block h-[2px] w-6 bg-blue-950 rounded transition-transform duration-300 origin-center",
          { "bg-lime-600 -rotate-45 -translate-y-[6px]": isOpen }
        )}
      />
    </button>
  );
}
