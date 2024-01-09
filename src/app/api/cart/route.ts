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

  if (!itemExist) {
    try {
      await prisma.product.create({
        data: {
          product,
          quantity: 1,
        },
      });

      return NextResponse.json("Product added to cart successfully");
    } catch (error) {
      return NextResponse.json({ error: "Failed to add product to cart" });
    }
  } else {
    try {
      await prisma.product.update({
        where: {
          id: product._id,
        },
        data: {
          quantity: itemExist.quantity + 1, // Update quantity based on your logic
          // Add other properties you want to update here
        },
      });

      return NextResponse.json("Item quantity updated successfully");
    } catch (error) {
      return NextResponse.json({ error: "Failed to update item quantity" });
    }
  }

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

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { product } = body;

  //? Loop through the cart and remove the product
  // state.cartItems = state.cartItems.filter(
  //   (item) => item.id !== action.payload.id
  // );

  return NextResponse.json(product);
}
