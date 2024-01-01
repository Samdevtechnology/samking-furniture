import { NextResponse } from "next/server";
import { products } from "../seed";

export async function GET() {
  console.log("PRODUCT API REACHED!!!");

  // const newProducts = products.filter((prod) => prod.tag.includes("new"));

  return NextResponse.json(products);
}
