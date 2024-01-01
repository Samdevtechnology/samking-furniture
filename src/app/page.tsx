import ImageCarousel from "@/components/ImageCarousel";
import ProductCarousel from "@/components/ProductCarousel";
import Container from "@/utils/Container";
import InspirationList from "@/components/InspirationList";

const Page = () => {
  return (
    <div>
      <ImageCarousel />
      <section className="bg-secondary">
        <Container>
          <header className="pt-8 mb-4 sm:mb-8 md:mb-12 text-center font-secondary font-medium text-xl">
            <h3>CLEARANCE DEALS</h3>
          </header>
          <div>
            <ProductCarousel category="hot" />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <header className="pt-8 mb-4 text-center font-secondary font-medium text-xl">
            <h3>NEW IN STORE</h3>
          </header>
          <div>
            <ProductCarousel variant="secondary" category="new" />
          </div>
        </Container>
      </section>

      <section className="bg-container">
        <Container>
          <header className="pt-8 mb-4 sm:mb-8 md:mb-12 text-center font-secondary font-medium text-xl">
            <h3>INSPIRATIONAL IDEAS</h3>
          </header>

          <InspirationList />
        </Container>
      </section>
    </div>
  );
};

export default Page;
