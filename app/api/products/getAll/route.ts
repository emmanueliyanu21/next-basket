import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const products = await response.json();

    return NextResponse.json({ data: products });
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.error();
  }
}
