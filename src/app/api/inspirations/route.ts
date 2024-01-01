import { NextResponse } from "next/server";
import { inspiration } from "../seed";

export async function GET() {
  console.log("INSPIRATION API REACHED!!!");

  return NextResponse.json(inspiration);
}
