import Image from "next/image";
import Link from "next/link";
import product1 from "@/assets/images/product1.png";
import Hot from "@/assets/icons/Hot";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";

const ProductCard = () => {
  return (
    <div className="bg-white mb-8 mx-4">
      <div className="bg-offwhite relative">
        <Link href="/">
          <Image
            width={100}
            height={200}
            src={product1}
            alt="Kubric chair"
            className="w-[250px] h-[300px] object-cover px-2 py-4 m-auto"
            quality={80}
            placeholder="blur"
          />

          <Hot className="w-10 h-10 absolute top-3 left-3 cursor-default" />
          <SolidHeart className="w-10 h-10 absolute top-3 right-3" />
        </Link>
      </div>
      <div className="px-4 mt-4">
        <div className="mb-2">
          <Link href="/">
            <h4 className="text-sm font-semibold">KUBRIC - ARMCHAIR</h4>
          </Link>
        </div>
        <div>
          <ul className="flex gap-x-1 mb-4">
            <li className=" rounded-full w-4 h-4 bg-blue-800"></li>
            <li className=" rounded-full w-4 h-4 bg-green-700"></li>
            <li className=" rounded-full w-4 h-4 bg-red-600"></li>
            <li className=" rounded-full w-4 h-4 bg-gray-500"></li>
            <li className=" rounded-full w-4 h-4 bg-yellow-600"></li>
          </ul>
        </div>
        <div className="flex justify-between items-start pb-4">
          <div className="price font-semibold">
            <h5>₦35,000</h5>
            <h6 className=" text-danger text-sm line-through font-normal">
              ₦40,000
            </h6>
          </div>
          <div className="cart bg-primary rounded-full f">
            <Link href="/">
              <ShoppingBagIcon className="w-7 h-7 m-2 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
