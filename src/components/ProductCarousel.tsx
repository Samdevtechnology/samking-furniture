"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";
import ProductCard, { ProductCard2 } from "./ProductCard";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { CarouselCont } from "@/utils/Container";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 900,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 500,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 100,
  },

  tab: {
    breakpoint: {
      max: 900,
      min: 800,
    },
    items: 2,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: {
      max: 800,
      min: 500,
    },
    items: 2,
    partialVisibilityGutter: 0,
  },
};

const responsive2 = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 500,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 0,
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
      min: 500,
    },
    items: 2,
    partialVisibilityGutter: 0,
  },
};

const ProductCarousel = () => {
  return (
    <div className="w-full flex">
      <Carousel
        arrows
        containerClass={CarouselCont}
        itemClass="pr-8"
        partialVisible
        responsive={responsive}
        swipeable
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </div>
  );
};

const CustomButtonGroupAsArrows = ({
  next,
  previous,
  carouselState,
}: ButtonGroupProps) => {
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

export const ProductCarousel2 = () => {
  return (
    <div className="w-[80%] mx-auto relative flex">
      <Carousel
        arrows={false}
        containerClass={CarouselCont}
        itemClass="pr-8"
        partialVisible
        responsive={responsive2}
        swipeable
        renderButtonGroupOutside
        customButtonGroup={<CustomButtonGroupAsArrows />}
      >
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
