import Container from "@/utils/Container";
import {
  ArrowLeftIcon,
  HeartIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/utils/MuiServerComponent";
import Image from "next/image";
import product1 from "@/assets/images/product1.png";

const Page = () => {
  return (
    <div>
      <Container className="py-8">
        <div className="w-fit">
          <Link
            href="/"
            className="flex gap-x-4 font-secondary text-sm items-center"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <p>CONTINUE SHOPPING</p>
          </Link>
        </div>
        <div className="text-2xl font-secondary py-6 font-medium">
          <h2>Shopping Bag (7 items)</h2>
        </div>

        <div className=" font-secondary">
          <main>
            <div className="cart-headings grid grid-cols-12 gap-4 bg-secondary py-1 px-4">
              <li className="col-span-6">
                <h3 className="font-medium">Products</h3>
              </li>
              <li className="col-span-2 text-center">
                <h3 className="font-medium">Unit Price</h3>
              </li>
              <li className="col-span-2 text-center">
                <h3 className="font-medium">Quantity</h3>
              </li>
              <li className="col-span-2 text-center">
                <h3 className="font-medium">Total</h3>
              </li>
            </div>
            <div className="cart-items">
              <div className="cart-item py-4 border-b border-black">
                <div className="grid grid-cols-12 items-center gap-4 px-4">
                  <div className="product-details col-span-6 flex">
                    <Image
                      alt="product-1"
                      src={product1}
                      className=" w-36 h-36 mr-4"
                    />
                    <div className="flex flex-col justify-between mb-6">
                      <h4 className="font-medium">Product Name - Color</h4>
                      <p className="opacity-50">
                        Estimated delivery within 7 working days
                      </p>
                      <div className="action">
                        <button className="text-sm mb-2 flex items-center">
                          <HeartIcon className="w-3 h-3 mr-1" /> Move to
                          wishlist
                        </button>
                        <button className="text-sm flex items-center">
                          <TrashIcon className="w-3 h-3 mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="unit-price col-span-2 text-center">
                    #90,000
                  </div>
                  <div className="quantity col-span-2 text-center flex justify-center">
                    <div className="relative w-24 flex justify-center items-center">
                      <button className=" absolute left-3">
                        <MinusIcon className="w-4 h-4" />
                      </button>
                      <input
                        type="text"
                        value={1}
                        className="w-24 px-8 text-center outline-none border border-black"
                      />
                      <button className=" absolute right-3">
                        <PlusIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="total col-span-2 text-center">#180,000</div>
                </div>
              </div>
            </div>
          </main>
          <aside className="flex p-4">
            <div className="discount w-full border-r border-black">
              <h3 className="font-medium pb-5">Discount or gift voucher?</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="e.g NG240UAR"
                  className="py-4 pl-6 mr-8 border border-black outline-none w-80 rounded"
                />
                <Button className=" font-medium bg-tertiary font-secondary px-12 tracking-wide">
                  REDEEM
                </Button>
              </div>
            </div>
            <div className="cart-summary w-full pl-8 flex flex-col">
              <div className="flex justify-between pb-12">
                <h3 className="font-medium">Subtotal</h3>
                <span>
                  <h3 className="font-medium text-2xl">#180,000</h3>
                  <p className=" opacity-50 text-sm">
                    (Excluding delivery fee)
                  </p>
                </span>
              </div>
              <div className="text-end">
                <Button className=" bg-primary font-medium font-secondary rounded p-4">
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default Page;
