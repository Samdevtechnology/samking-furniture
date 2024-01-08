import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

import Product from "@/lib/types/Product";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { product } = body;

  const itemExist = await prisma.product.findUnique({
    where: {
      id: product._id,
    },
  });

  //? Update the Item quantity

  // const addToCart() {
  //   const existingItem = state.cartItems.find(
  //     (item) => item.id === action.payload.id
  //   );

  //   if (existingItem) {
  //     // existingItem.quantity++;
  //     existingItem.quantity = (existingItem.quantity ?? 0) + 1;

  //   } else {
  //     const tempProductItem = { ...action.payload, quantity: 1 };
  //     state.cartItems.push(tempProductItem);
  //   }

  // }

  return NextResponse.json("Cart Successfully Updated");
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { product } = body;

  const itemExist = await prisma.product.findUnique({
    where: {
      id: product._id,
    },
  });

  //? Decrease from the item quantity and remove if zero.
  //  decreaseCart(state, action: PayloadAction<CartProduct>) {
  //   const itemToDecrease = state.cartItems.find(
  //     (item) => item.id === action.payload.id
  //   );

  //   if (
  //     itemToDecrease &&
  //     itemToDecrease.quantity &&
  //     itemToDecrease.quantity > 1
  //   ) {
  //     itemToDecrease.quantity--;
  //     //   toast.info("Decreased product quantity", {
  //     //     position: "bottom-left",
  //     //   });
  //   } else if (itemToDecrease && itemToDecrease.quantity === 1) {
  //     state.cartItems = state.cartItems.filter(
  //       (item) => item.id !== action.payload.id
  //     );
  //     //   toast.error("Product removed from cart", {
  //     //     position: "bottom-left",
  //     //   });
  //   }

  // },
  return NextResponse.json(product);
}
