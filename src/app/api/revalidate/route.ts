import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.NEXT_PUBLIC_REVALIDATION_TOKEN) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  // Add routes that use data from sanity
  revalidatePath('/');
  revalidatePath('/resume');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
