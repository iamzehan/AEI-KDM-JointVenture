"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

import header1 from "./images/header-1.jpg";
import header2 from "./images/header-2.jpg";
import header3 from "./images/header-3.jpg";

const images = [
  { path: header1, alt: "Header Img 1" },
  { path: header2, alt: "Header Img 2" },
  { path: header3, alt: "Header Img 3" },
];

export default function Header() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // slides every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden relative md:bg-transparent md:shadow-lg shadow-lime-600/20" ref={emblaRef}>
      <div className="flex embla__container">
        {images.map((image, index) => (
          <div key={index} className="relative flex-[0_0_100%] h-64 md:h-120">
            <Image
              src={image.path}
              alt={image.alt}
              fill
              className="object-cover md:shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
