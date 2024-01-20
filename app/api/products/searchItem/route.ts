import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { id } = await request.json();
  
  try {
    const apiUrl = `https://dummyjson.com/products/search?q=${id}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${apiUrl}`);
    }

    const product = await response.json();

    console.log(product, "TARGET PRODUCT");

    return NextResponse.json({ data: product });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}

