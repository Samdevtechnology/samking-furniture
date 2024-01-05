"use client";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Product from "@/lib/types/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice";

const AddToCartIcon = ({ item }: { item: Product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(item));
  };

  return (
    <button
      onClick={addToCartHandler}
      className={`cart bg-primary rounded-full flex`}
    >
      <ShoppingBagIcon className="w-7 h-7 m-2 text-white cursor-pointer" />
    </button>
  );
};

export default AddToCartIcon;
