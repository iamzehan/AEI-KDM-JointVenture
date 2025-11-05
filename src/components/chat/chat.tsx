"use client";
import * as icons from "@mui/icons-material";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { useState } from "react";

export default function Chat() {
  const [isClicked, setClicked] = useState(false);
  const [isGmailHovered, setGmailHovered] = useState(false);
  const [isWhatsAppHovered, setWhatsAppHovered] = useState(false);
  const pathname = usePathname();
  function handleMessageClick() {
    setClicked((prev) => !prev);
    
    setTimeout(() => {
      setGmailHovered(true);
      setWhatsAppHovered(true);
    },1000);

    setTimeout(() => {
      setGmailHovered(false);
      setWhatsAppHovered(false);
    }, 2000);
  }

  const MessageIcon = isClicked ? icons.Message : icons.MessageOutlined;
  const WhatsAppIcon = icons.WhatsApp;
  const GmailIcon = icons.Email;

  return (
    <div className={clsx(["fixed z-50 bottom-15 right-5 flex flex-col gap-2 items-end transition-bottom duration-300 ease"], 
      {
        ["bottom-20 md:bottom-15"]:pathname==='/'
      }
    )}>
      {/* Gmail Button */}
      <div
        className={clsx(
          "mx-1 h-auto w-auto p-2 rounded-full flex justify-center origin-right md:origin-bottom items-center transition-all duration-300 ease",
          {
            "opacity-100 scale-100 bg-red-400 hover:shadow-lg hover:shadow-red-400/20 hover:transition-shadow hover:duration-500 ease":
              isClicked,
          },
          { "z-30 md:absolute opacity-0 scale-0": !isClicked }
        )}
        onMouseEnter={() => setGmailHovered(true)}
        onMouseLeave={() => setGmailHovered(false)}
      >
        <span
          className={clsx(
            "overflow-hidden transition-all transition-width duration-500 ease-in-out origin-right transform whitespace-nowrap",
            {
              "w-[90px] opacity-100 scale-100": isGmailHovered,
              "w-0 md:opacity-0 scale-0": !isGmailHovered,
            }
          )}
        >
          Gmail
        </span>
        <GmailIcon fontSize="large" />
      </div>

      {/* WhatsApp Button */}
      <div
        className={clsx(
          "mx-1 h-auto w-auto flex items-center justify-center rounded-full p-2 origin-right transition-all duration-300 ease-in-out",
          {
            "opacity-100 scale-100 bg-green-400 md:origin-bottom shadow-md hover:shadow-lg hover:shadow-green-400/20":
              isClicked,
          },
          { "z-40 md:absolute opacity-0 scale-0": !isClicked }
        )}
        onMouseEnter={() => setWhatsAppHovered(true)}
        onMouseLeave={() => setWhatsAppHovered(false)}
      >
        <span
          className={clsx(
            "overflow-hidden transition-all transition-width duration-500 ease-in-out origin-right transform whitespace-nowrap",
            {
              "w-[90px] opacity-100 scale-100": isWhatsAppHovered,
              "w-0 opacity-0 scale-0": !isWhatsAppHovered,
            }
          )}
        >
          Whatsapp
        </span>
        <WhatsAppIcon fontSize="large" />
      </div>

      {/* Toggle Button */}
      <div
        className={clsx(
          "z-50 bottom-0 right-0 h-auto w-auto p-3 rounded-full flex justify-center items-center shadow-sm shadow-lime-500 active:scale-95 hover:text-lime-500 transition-color duration-300 ease",
          {
            "bg-lime-950 text-lime-500 text-shadow-lg shadow-lg shadow-lime-500/20 inset-shadow-sm inset-shadow-lime-500/20":
              isClicked,
          },
          { "bg-white text-blue-950": !isClicked }
        )}
        onClick={handleMessageClick}
      >
        <MessageIcon fontSize="large" />
      </div>
    </div>
  );
}
