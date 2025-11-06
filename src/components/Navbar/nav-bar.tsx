"use client";
import Brand from './brand';
import Favicon from "./favicon";
import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";
import { useState } from "react";


import ScrollToTop from "@/lib/scroll-to-top";

import HamburgerMenu from "./hamburger-menu";

export default function Navbar() {
  const [isOpen, setMenu] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const handleMenu = () => setMenu(!isOpen);

  // Called when a nav link is clicked: triggers hide with delay
  const handleLinkClick = () => {
    setClicked(true); // trigger hide animation
    ScrollToTop();
    setTimeout(() => {
      setMenu(false);  // close menu after delay
      setClicked(false);
    }, 400); // ⏱ adjust delay (ms) to match your transition duration
  };

  return (
    <nav className="
    sticky top-0 z-50 
    bg-white dark:bg-zinc-950 
    shadow-sm/20 dark:shadow-gray-500 
    flex justify-between 
    items-center p-2 md:py-4
    ">
      {/* Brand */}
      <div className="flex items-center gap-2">
        {/* Logo */}
        <Favicon/>
        {/* Brand Name */}
        <Brand/>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-4">
        <NavLinks click={handleLinkClick} />
      </ul>

      {/* Mobile Burger Button */}
      <HamburgerMenu isOpen={isOpen} handleMenu={handleMenu}/>
      {/* Mobile Menu */}
      <MobileMenu handleLinkClick={handleLinkClick} isOpen={isOpen} isClicked={isClicked}/>
    </nav>
  );
}
