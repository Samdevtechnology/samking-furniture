import ProductCard from "./ProductCard";

type CarouselProp = {
  variant?: "primary" | "secondary";
  count?: number;
};

const ProductCarousel = ({ variant = "primary", count = 5 }: CarouselProp) => {
  return (
    <div
      className={`flex overflow-hidden w-full ${
        variant === "secondary" && "w-4/5 mx-auto"
      }`}
    >
      <ul
        className={`flex gap-6 sm:gap-8 ${
          variant === "primary" && "2xl:gap-16"
        } overflow-visible`}
      >
        {Array(count)
          .fill(null)
          .map((_, i) => {
            return (
              <li key={i}>
                <ProductCard variant={variant} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductCarousel;
