"use client";
import Image from "next/image";
import favicon from "@/app/favicon.ico";

export default function Favicon() {
  return <Image src={favicon} height={50} width={50} alt="logo" />;
}
