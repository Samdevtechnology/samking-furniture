import ImageTitle from "@/components/ImageTitle";
import CategoryHeader from "./components/CategoryHeader";
import ProductGrid from "./components/ProductGrid";

const page = () => {
  return (
    <div>
      <ImageTitle />
      <section>
        <CategoryHeader />
        <ProductGrid />
      </section>
    </div>
  );
};

export default page;
