import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const { id } = await request.json();

  try {
    // Fetch data from the external API
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const product = await response.json();
    console.log(product, 'TARGET PRODUCT');

    return NextResponse.json({ data: product });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
