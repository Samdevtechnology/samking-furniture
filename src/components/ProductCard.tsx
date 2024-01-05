import Image from "next/image";
import Link from "next/link";
import Hot from "@/assets/icons/Hot";
import NewIcon from "@/assets/icons/NewIcon";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import Product from "@/lib/types/Product";
import AddToCartIcon from "./AddToCartIcon";

type ProductProps = {
  product: Product;
  variant?: "primary" | "secondary";
};
const RenderTagIcons = ({ tag }: { tag: string[] }) => {
  const isNew = tag.includes("new");
  const isHot = tag.includes("hot");

  if (isNew && isHot) {
    return (
      <>
        <NewIcon className="w-16 h-16 absolute top-0 right-0 cursor-default" />
        <Hot className="w-10 h-10 absolute top-3 right-3 cursor-default" />
      </>
    );
  }

  if (isNew) {
    return (
      <NewIcon className="w-16 h-16 absolute top-0 right-0 cursor-default" />
    );
  }

  if (isHot) {
    return <Hot className="w-10 h-10 absolute top-3 right-3 cursor-default" />;
  }

  return null;
};

export const ProductCard = ({ product, variant = "primary" }: ProductProps) => {
  const { url, name, tag, displayName, price, discountPrice } = product;
  return (
    <div
      className={` mb-8 max-w-[350px] w-full ${
        variant === "primary"
          ? "bg-white min-w-[250]"
          : "bg-container2 border border-container2  min-w-[200px]"
      }`}
    >
      <div
        className={`relative ${
          variant === "primary" ? "bg-offWhite" : "bg-white"
        }`}
      >
        <Link href="/">
          <Image
            width={100}
            height={200}
            src={url}
            alt={name}
            className="w-[250px] h-[300px] object-cover px-2 py-4 m-auto"
            quality={80}
            // placeholder="blur"
          />

          <SolidHeart className="w-10 h-10 absolute top-3 left-3" />
          {<RenderTagIcons tag={tag} />}
        </Link>
      </div>
      <div className={`px-4 pb-4 mt-4 flex justify-between`}>
        <div>
          <div className="mb-2">
            <Link href="/">
              <h4 className="text-sm uppercase font-semibold">{displayName}</h4>
            </Link>
          </div>
          <div>
            <ul
              className={`flex gap-x-1 ${
                variant === "primary" ? "mb-4" : "mb-2"
              }`}
            >
              <li className=" rounded-full w-4 h-4 bg-blue-800"></li>
              <li className=" rounded-full w-4 h-4 bg-green-700"></li>
              <li className=" rounded-full w-4 h-4 bg-red-600"></li>
              <li className=" rounded-full w-4 h-4 bg-gray-500"></li>
              <li className=" rounded-full w-4 h-4 bg-yellow-600"></li>
            </ul>
          </div>

          <div
            className={`  ${
              variant === "primary" ? "flex justify-between items-start" : ""
            }`}
          >
            <div
              className={`price font-semibold  ${
                variant === "primary" ? "" : "flex items-center gap-x-2 "
              }`}
            >
              <h5>{discountPrice}</h5>
              <h6 className=" text-danger text-sm line-through font-normal">
                {price}
              </h6>
            </div>
          </div>
        </div>
        <div
          className={`flex ${
            variant === "primary" ? "items-end" : "items-start"
          }`}
        >
          <AddToCartIcon item={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
