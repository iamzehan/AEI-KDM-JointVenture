import clsx from 'clsx';
import NavLinks from './nav-links';

export default function MobileMenu({handleLinkClick, isOpen, isClicked}:{handleLinkClick?:()=>void, isOpen:boolean, isClicked:boolean}) {
  return (
    <div
      className={clsx(
        "absolute my-1 top-full right-1 w-50 bg-zinc-500/50 backdrop-blur-lg flex flex-col items-center shadow-lg md:hidden transform origin-top-right transition-all duration-500 overflow-hidden z-40 rounded-lg list-none",
        {
          // Closed: hidden with delayed opacity if clicked
          "opacity-0 scale-0 pointer-events-none transition-delay-[200ms]":
            !isOpen && isClicked,
          // Regular close
          "opacity-0 scale-0 pointer-events-none transition-delay-[0ms]":
            !isOpen && !isClicked,
          // Open
          "opacity-100 scale-100 translate-y-0 delay-none":
            isOpen && !isClicked,
        }
      )}
    >
      <NavLinks click={handleLinkClick} />
    </div>
  );
}
