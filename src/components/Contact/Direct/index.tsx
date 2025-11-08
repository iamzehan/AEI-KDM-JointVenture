"use client";

import { getDirectContact } from "@/lib/route";

export default function Direct() {
  const {name, address, email, phone} = getDirectContact();
  const year = new Date().getFullYear();
  return (
    <div className="
    flex flex-col gap-2 w-full h-full xl:w-1/3
    bg-white dark:bg-transparent
    shadow-md/10
    md:dark:border md:border-t md:rounded-xl md:border-gray-500/20 
    p-5 md:p-10 dark:text-white">
      <p className="font-bold text-3xl pb-4 border-b-1 border-gray-500/20 text-blue-950 dark:text-white">Direct Contact</p>
      <p>
        {name} © {year}
      </p>
      <p>
        <strong>Address: </strong> {address}
      </p>
      {phone.map((ph, idx) => {
        return (
          <p key={idx}>
            <strong>Phone-{idx+1}:</strong> {ph}
          </p>
        );
      })}
      {email.map((em, idx) => {
        return (
          <p key={idx}>
            <strong>Email-{idx+1}:</strong> {em}
          </p>
        );
      })}
    </div>
  );
}
