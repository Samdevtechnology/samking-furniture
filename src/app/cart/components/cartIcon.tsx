"use client";

import IconBtnWrap from "@/utils/IconBtnWrap";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Badge } from "@/utils/MuiServerComponent";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/lib/store";
import { useEffect } from "react";
import { getTotals } from "@/lib/features/cart/cartSlice";

const CartIcon = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <IconBtnWrap
      bg="bg-white"
      size={12}
      className="rounded-full overflow-visible"
      href="/cart"
    >
      <Badge content={cart.cartTotalQuantity} color="orange">
        <ShoppingBagIcon className="w-7 h-7" />
      </Badge>
    </IconBtnWrap>
  );
};

export default CartIcon;
