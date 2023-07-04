"use client";

import { Carousel, IconButton } from "@material-tailwind/react";
import SubNav from "./SubNav";
import Image from "next/image";
import bg1 from "@/assets/images/bg1.jpg";
import bg2 from "@/assets/images/bg2.jpg";
import bg3 from "@/assets/images/bg3.jpg";

const nullElement = () => <div className="hidden"></div>;

const ImageCarousel = () => {
  return (
    <div className="relative">
      <SubNav />
      <Carousel
        autoplay={true}
        loop={true}
        className="rounded-none h-96"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={nullElement}
        nextArrow={nullElement}
      >
        <Image
          width={500}
          height={500}
          src={bg1}
          alt="Slider image 1"
          className="h-full w-full object-cover"
          quality={80}
          placeholder="blur"
        />
        <Image
          src={bg2}
          alt="Slider image 2"
          className="h-full w-full object-cover"
          quality={80}
          placeholder="blur"
        />
        <Image
          src={bg3}
          alt="Slider image 3"
          className="h-full w-full object-cover"
          quality={80}
          placeholder="blur"
        />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
