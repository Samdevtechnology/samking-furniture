import Image from "next/image";
import Link from "next/link";
import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/product2.png";
import Hot from "@/assets/icons/Hot";
import NewIcon from "@/assets/icons/NewIcon";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";

const ProductCard = () => {
  return (
    <div className="bg-white mb-8 max-w-[350px] min-w-[250] w-full">
      <div className="bg-offWhite relative">
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
            <h4 className="text-sm uppercase font-semibold">
              KUBRIC - ARMCHAIR
            </h4>
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

export const ProductCard2 = () => {
  return (
    <div className="bg-container2 border border-container2 mb-8 mx-4 max-w-[350px] min-w-[200px] w-full">
      <div className="bg-white relative">
        <Link href="/">
          <Image
            width={100}
            height={200}
            src={product2}
            alt="Kubric chair"
            className="w-[250px] h-[300px] object-contain px-2 py-4 m-auto"
            quality={80}
            placeholder="blur"
          />

          <SolidHeart className="w-10 h-10 absolute top-3 left-3" />
          <NewIcon className="w-16 h-16 absolute top-0 right-0 cursor-default" />
        </Link>
      </div>
      <div className="flex justify-between px-4 mt-4">
        <div>
          <div className="mb-2">
            <Link href="/">
              <h4 className="text-sm  uppercase font-semibold">
                Bumble - Table
              </h4>
            </Link>
          </div>
          <div>
            <ul className="flex gap-x-1 mb-2">
              <li className=" rounded-full w-4 h-4 bg-blue-800"></li>
              <li className=" rounded-full w-4 h-4 bg-green-700"></li>
              <li className=" rounded-full w-4 h-4 bg-red-600"></li>
              <li className=" rounded-full w-4 h-4 bg-gray-500"></li>
              <li className=" rounded-full w-4 h-4 bg-yellow-600"></li>
            </ul>
          </div>

          <div className="pb-4">
            <div className="price flex items-center gap-x-2 font-semibold">
              <h5>₦35,000</h5>
              <h6 className=" text-danger line-through text-sm font-normal">
                ₦40,000
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="cart flex bg-primary rounded-full f">
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
