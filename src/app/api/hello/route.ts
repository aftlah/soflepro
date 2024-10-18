import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from Next.js API with TypeScript!' });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { todo } = body;

  return NextResponse.json({ message: `Todo created: ${todo}` }, { status: 201 });
}
