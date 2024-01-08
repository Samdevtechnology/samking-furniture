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
