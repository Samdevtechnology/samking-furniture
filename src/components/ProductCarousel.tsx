"use client";
import ProductCard from "./ProductCard";
import ProductCarouselSkeleton from "./Skeletons/ProductCarousel";
import { useGetProductsQuery } from "@/app/(redux)/(slices)/productsSlice";
import Product from "@/app/(redux)/types/Product";
import Carousel from "./Carousel";

type CarouselProp = {
  variant?: "primary" | "secondary";
  category: string;
};

const ProductCarousel = ({ variant = "primary", category }: CarouselProp) => {
  const { data: products, error, isLoading, isSuccess } = useGetProductsQuery();

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (isLoading || !isSuccess) {
    return <ProductCarouselSkeleton variant={variant} />;
  }

  const filteredProducts = products
    ? products.ids
        .map((id) => products.entities[id])
        .filter(
          (product): product is Product =>
            !!product && product.tag.includes(category)
        )
    : [];

  if (!filteredProducts.length) {
    return <div>{`No products in the ${category} category`}</div>;
  }

  return (
    <Carousel variant={variant}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} variant={variant} />
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
