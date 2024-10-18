import { NextResponse } from 'next/server';

// Fungsi handler untuk menangani request GET
export async function GET() {
  return NextResponse.json({ message: 'Hello from Next.js API with TypeScript!' });
}

// Fungsi handler untuk request POST
export async function POST(req: Request) {
  const body = await req.json();
  const { todo } = body;

  return NextResponse.json({ message: `Todo created: ${todo}` }, { status: 201 });
}
