"use client";
import NavLinks from "./nav-links";
import clsx from "clsx";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setMenu] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleMenu = () => setMenu(!isOpen);

  // Called when a nav link is clicked: triggers hide with delay
  const handleLinkClick = () => {
    setClicked(true); // trigger hide animation
    setTimeout(() => {
      setMenu(false);  // close menu after delay
      setClicked(false);
    }, 400); // ⏱ adjust delay (ms) to match your transition duration
  };

  return (
    <nav className="sticky top-0 z-50 dark:bg-white flex justify-between items-center p-2 md:py-4 md:px-40">
      {/* Brand */}
      <div className="flex items-center gap-2">
        {/* Logo */}
        <div className="hidden md:flex justify-center items-center h-10 w-10 md:h-20 md:w-20 bg-blue-950 text-lime-300 font-bold rounded p-1 md:text-sm text-xs">
          AEI+KDM
        </div>
        {/* Brand Name */}
        <div className="flex flex-col justify-center leading-tight text-black">
          <div className="font-bold text-navy text-sm md:text-base">AEI+KDM JV</div>
          <div className="text-gray-500 text-xs md:text-sm">
            Powering Bangladesh’s Energy Future
          </div>
        </div>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-4">
        <NavLinks click={handleLinkClick} />
      </ul>

      {/* Mobile Burger Button */}
      <button
        onClick={handleMenu}
        className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1 p-1"
      >
        <span
          className={clsx(
            "block h-[2px] w-6 bg-blue-950 rounded transition-transform duration-300 origin-center",
            { "bg-lime-600 rotate-45 translate-y-[6px]": isOpen }
          )}
        />
        <span
          className={clsx(
            "block h-[2px] w-6 bg-blue-950 rounded transition-opacity duration-300",
            { "opacity-0": isOpen }
          )}
        />
        <span
          className={clsx(
            "block h-[2px] w-6 bg-blue-950 rounded transition-transform duration-300 origin-center",
            { "bg-lime-600 -rotate-45 -translate-y-[6px]": isOpen }
          )}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "absolute my-1 top-full right-1 w-50 bg-lime-200/50 border-l-2 border-b-2 border-transparent border-t-none backdrop-blur-lg flex flex-col items-center shadow-lg shadow-gray-950/80 md:hidden transform origin-top transition-all duration-500 overflow-hidden z-40 rounded-lg list-none",
          {
            // Closed: hidden with delayed opacity if clicked
            "opacity-0 scale-0 translate-x-100 pointer-events-none transition-delay-[200ms]":
              !isOpen && isClicked,
            // Regular close
            "opacity-0 scale-0 translate-x-100 pointer-events-none transition-delay-[0ms]":
              !isOpen && !isClicked,
            // Open
            "opacity-100 scale-100 translate-y-0 delay-none":
              isOpen && !isClicked,
          }
        )}
      >
        <NavLinks click={handleLinkClick} />
      </div>
    </nav>
  );
}
