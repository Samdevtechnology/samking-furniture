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

      <section className="bg-container">
        <Container>
          <header className="pt-8 mb-4 text-center font-secondary font-medium text-xl">
            <h3>INSPIRATIONAL IDEAS</h3>
          </header>
          <ul className="flex flex-col just-cont gap-y-10">
            <li className=" flex just-cont bg-white">
              <div className="image w-2/4">
                <Image
                  width={100}
                  height={200}
                  src={Inspirational1}
                  alt="Inspirational Image"
                  className="w-full h-full object-contain"
                  quality={80}
                  placeholder="blur"
                />
              </div>
              <div className="w-2/4 self-start flex justify-center flex-col items-center">
                <h5 className="my-12 text-2xl">Living Room</h5>
                <p className=" w-4/5">
                  Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
                  consectetur et luctus et, porta ut dolor. Curabitur ultricies
                  ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel
                  consectetur diam. Maecenas vitae egestas dolor. Fusce tempor
                  magna at tortor aliquet finibus. Sed eu nunc sit amet elit
                  euismod faucibus. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Duis
                  gravida eget neque vel vulputate.
                </p>
              </div>
            </li>
            <li className=" flex just-cont bg-white">
              <div className="w-2/4 self-start flex justify-center flex-col items-center">
                <h5 className="my-12 text-2xl">Living Room</h5>
                <p className=" w-4/5">
                  Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
                  consectetur et luctus et, porta ut dolor. Curabitur ultricies
                  ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel
                  consectetur diam. Maecenas vitae egestas dolor. Fusce tempor
                  magna at tortor aliquet finibus. Sed eu nunc sit amet elit
                  euismod faucibus. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Duis
                  gravida eget neque vel vulputate.
                </p>
              </div>
              <div className="image w-2/4">
                <Image
                  width={100}
                  height={200}
                  src={Inspirational2}
                  alt="Inspirational Image"
                  className="w-full h-full object-contain"
                  quality={80}
                  placeholder="blur"
                />
              </div>
            </li>
          </ul>
        </Container>
      </section>
    </div>
  );
};
