import ImageCarousel from "@/components/ImageCarousel";
import ProductCarousel, {
  ProductCarousel2,
} from "@/components/ProductCarousel";
import Container from "@/utils/Container";
import Inspirational1 from "@/assets/images/Inspiration1.png";
import Inspirational2 from "@/assets/images/Inspiration2.png";
import InspirationList from "@/components/InspirationList";

const inspirationDemoData = [
  {
    key: "00",
    image: Inspirational1,
    heading: "Living Room",
    details: ` Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
  consectetur et luctus et, porta ut dolor. Curabitur ultricies
  ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel
  consectetur diam. Maecenas vitae egestas dolor. Fusce tempor
  magna at tortor aliquet finibus. Sed eu nunc sit amet elit
  euismod faucibus. Class aptent taciti sociosqu ad litora
  torquent per conubia nostra, per inceptos himenaeos. Duis
  gravida eget neque vel vulputate.`,
  },
  {
    key: "11",
    image: Inspirational2,
    heading: "Living Room",
    title: "Living Room View",
    details: ` Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
  consectetur et luctus et, porta ut dolor. Curabitur ultricies
  ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel
  consectetur diam. Maecenas vitae egestas dolor. Fusce tempor
  magna at tortor aliquet finibus. Sed eu nunc sit amet elit
  euismod faucibus. Class aptent taciti sociosqu ad litora
  torquent per conubia nostra, per inceptos himenaeos. Duis
  gravida eget neque vel vulputate.`,
  },
];

const Page = () => {
  return (
    <div>
      <ImageCarousel />

      <section className="bg-secondary">
        <Container>
          <header className="pt-8 mb-4 sm:mb-8 md:mb-12 text-center font-secondary font-medium text-xl">
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
          <header className="pt-8 mb-4 sm:mb-8 md:mb-12 text-center font-secondary font-medium text-xl">
            <h3>INSPIRATIONAL IDEAS</h3>
          </header>

          <InspirationList lists={inspirationDemoData} />
        </Container>
      </section>
    </div>
  );
};

export default Page;
