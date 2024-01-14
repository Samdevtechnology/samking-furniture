import ProductCard from "@/components/ProductCard";
import Container from "@/utils/Container";
import React from "react";

const SampleProduct = {
  _id: "12",
  url: "https://res.cloudinary.com/samdevtech/image/upload/v1700075814/product2_tqhqwc.png",
  name: "Bumble Table",
  tag: ["new"],
  displayName: "Bumble - Table",
  price: 40000,
  discountPrice: 35000,
};

const ProductGrid = () => {
  return (
    <div className="bg-container pt-4 mt-12">
      <Container>
        <div className=" grid grid-cols-4 gap-6">
          <ProductCard product={SampleProduct} />
          <ProductCard product={SampleProduct} />
          <ProductCard product={SampleProduct} />
          <ProductCard product={SampleProduct} />
          <ProductCard product={SampleProduct} />
          <ProductCard product={SampleProduct} />
          <ProductCard product={SampleProduct} />
        </div>
        <div>
          <div className="flex">
            <span>1 - 20 0f 900 products</span>
            <span>1 2 3 </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductGrid;
