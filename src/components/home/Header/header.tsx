"use client";
import Carousel from "./carousel";
import Heading from "./heading";

export default function Header() {

  return (
    <div className="relative flex flex-col h-full">
      <Carousel/>
      <Heading/>
    </div>
  );
}
