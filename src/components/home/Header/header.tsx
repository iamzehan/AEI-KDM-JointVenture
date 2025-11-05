"use client";
import Carousel from "./carousel";
import Heading from "./heading";

export default function Header({font}:{font:{className:string}}){
  return (
    <div className="relative flex flex-col h-full">
      <Carousel />
      <Heading  font={font}/>
    </div>
  );
}
