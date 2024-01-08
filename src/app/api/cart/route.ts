import { NextResponse } from "next/server";
import { inspiration } from "../seed";

export async function GET() {
  console.log("Cart Api Reached");

  return NextResponse.json(inspiration);
}
