import ImageCarousel from "@/components/ImageCarousel";
import ProductCarousel, {
  ProductCarousel2,
} from "@/components/ProductCarousel";
import Container from "@/utils/Container";
import Inspirational1 from "@/assets/images/Inspiration1.png";
import Inspirational2 from "@/assets/images/Inspiration2.png";
import Image from "next/image";
import React from "react";

export const Home = () => {
  return (
    <div>
      <ImageCarousel />
      <section className="bg-secondary">
        <Container>
          <header className="pt-8 mb-4 text-center font-secondary font-medium text-xl">
            <h3>CLEARANCE DEALS</h3>
          </header>
          <div className="flex just-cont">
            <ProductCarousel />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <header className="pt-8 mb-4 text-center font-secondary font-medium text-xl">
            <h3>NEW IN STORE</h3>
          </header>
          <div className="flex just-cont">
            <ProductCarousel2 />
          </div>
        </Container>
      </section>
    </div>
  );
};
