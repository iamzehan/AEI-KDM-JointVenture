"use client";
import * as icons from "@mui/icons-material";
import clsx from "clsx";
import { useState } from "react";

export default function Chat() {
  const [isClicked, setClicked] = useState(false);

  function handleMessageClick() {
    setClicked((prev) => !prev);
  }

  const MessageIcon = isClicked ? icons.Message : icons.MessageOutlined;
  const WhatsAppIcon = icons.WhatsApp;
  const GmailIcon = icons.OutgoingMail;

  return (
    <div className="absolute bottom-15 right-5 flex flex-col gap-2 items-center">
      <div
        className={clsx(
          "h-auto w-auto p-2 rounded-full flex justify-center items-center transition-all duration-300 ease",
          { ["opacity-100 scale-100 bg-red-400 origin-bottom hover:shadow-lg hover:shadow-red-400/20 hover:transition-shadow hover:duration-500 ease"]: isClicked },
          { ["z-30 absolute opacity-0 scale-0"]: !isClicked }
        )}
      >
        <GmailIcon fontSize="large" />
      </div>
      <div
        className={clsx(
          "h-auto w-auto p-2 rounded-full flex justify-center items-center transition-all duration-300 ease",
          { ["opacity-100 scale-100 bg-green-400 origin-bottom hover:shadow-lg hover:shadow-green-400/20 hover:transition-shadow hover:duration-500 ease"]: isClicked },
          { ["z-40 absolute opacity-0 scale-0"]: !isClicked }
        )}
      >
        <WhatsAppIcon fontSize="large" />
      </div>

      <div
        className={clsx(
          "z-50 bottom-0 right-0 h-auto w-auto p-3 rounded-full flex justify-center items-center active:scale-95 hover:text-lime-500 transition-color duration-300 ease",
          {
            ["bg-blue-950 text-lime-500 shadow-lg shadow-lime-500/20 inset-shadow-sm inset-shadow-sky-500/20"]:
              isClicked,
          },
          { ["bg-white text-blue-950"]: !isClicked }
        )}
        onClick={handleMessageClick}
      >
        <MessageIcon fontSize="large" />
      </div>
    </div>
  );
}
