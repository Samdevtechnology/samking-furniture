"use client";

import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { CarouselCont } from "@/utils/Container";
import { ReactNode } from "react";

export const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1200,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  desktop1: {
    breakpoint: {
      max: 1200,
      min: 1100,
    },
    items: 3,
    partialVisibilityGutter: 30,
  },
  desktop2: {
    breakpoint: {
      max: 1100,
      min: 1000,
    },
    items: 3,
    partialVisibilityGutter: 20,
  },
  desktop3: {
    breakpoint: {
      max: 1000,
      min: 950,
    },
    items: 2,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: {
      max: 950,
      min: 850,
    },
    items: 2,
    partialVisibilityGutter: 50,
  },
  tablet1: {
    breakpoint: {
      max: 850,
      min: 700,
    },
    items: 2,
    partialVisibilityGutter: 40,
  },
  tablet2: {
    breakpoint: {
      max: 700,
      min: 650,
    },
    items: 2,
    partialVisibilityGutter: 20,
  },
  tablet3: {
    breakpoint: {
      max: 650,
      min: 600,
    },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: {
      max: 600,
      min: 500,
    },
    items: 2,
    partialVisibilityGutter: 5,
  },
  mobile1: {
    breakpoint: {
      max: 500,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 100,
  },
};

export const responsive2 = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  desktop1: {
    breakpoint: {
      max: 1150,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 20,
  },
  tab: {
    breakpoint: {
      max: 1024,
      min: 800,
    },
    items: 2,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: {
      max: 800,
      min: 700,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
  tablet1: {
    breakpoint: {
      max: 700,
      min: 650,
    },
    items: 2,
    partialVisibilityGutter: 20,
  },
  tablet2: {
    breakpoint: {
      max: 650,
      min: 600,
    },
    items: 2,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: {
      max: 600,
      min: 500,
    },
    items: 1,
    partialVisibilityGutter: 50,
  },
  mobile1: {
    breakpoint: {
      max: 500,
      min: 450,
    },
    items: 1,
    partialVisibilityGutter: 60,
  },
  mobile2: {
    breakpoint: {
      max: 450,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const CustomButtons = ({ next, previous, carouselState }: ButtonGroupProps) => {
  if (carouselState) {
    const { currentSlide, slidesToShow, totalItems } = carouselState;
    const carouselEnd = currentSlide + slidesToShow === totalItems;

    return (
      <div>
        {Boolean(currentSlide) && (
          <button
            onClick={() => {
              if (previous) previous();
            }}
            className="absolute top-1/4 -left-12 sm:-left-16 "
          >
            <ChevronLeftIcon className=" w-16 h-16" />
          </button>
        )}

        {!carouselEnd && (
          <button
            onClick={() => {
              if (next) next();
            }}
            className="absolute top-1/4 -right-12 sm:-right-20"
          >
            <ChevronRightIcon className=" w-16 h-16" />
          </button>
        )}
      </div>
    );
  }
  return (
    <div>
      <button className="absolute top-1/4 -left-16">
        <ChevronLeftIcon className=" w-16 h-16" />
      </button>
      <button className="absolute top-1/4 -right-20">
        <ChevronRightIcon className=" w-16 h-16" />
      </button>
    </div>
  );
};

type CarouselProp = {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

const Carousel = ({ variant = "primary", children }: CarouselProp) => {
  return (
    <div
      className={`flex ${
        variant === "primary" ? "w-full" : "w-[80%] mx-auto relative"
      }`}
    >
      <ReactCarousel
        arrows={variant === "primary"}
        containerClass={CarouselCont}
        itemClass="pr-6 sm:pr-8"
        partialVisible
        responsive={variant === "primary" ? responsive : responsive2}
        swipeable
        renderButtonGroupOutside={variant === "secondary"}
        customButtonGroup={variant === "secondary" ? <CustomButtons /> : null}
      >
        {children}
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
