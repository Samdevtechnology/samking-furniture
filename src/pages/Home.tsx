import ImageCarousel from "@/components/ImageCarousel";
import ProductCarousel from "@/components/ProductCarousel";
import React from "react";

export const Home = () => {
  return (
    <div>
      <ImageCarousel />
      <section className="bg-secondary">
        <header className="pt-8 mb-4 text-center font-secondary font-medium text-xl">
          <h3>CLEARANCE DEALS</h3>
        </header>
        <div className="flex just-cont w-11/12 mx-auto">
          <ProductCarousel />
        </div>
      </section>
    </div>
  );
};
