import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameName = searchParams.get('name');
  const myComment = searchParams.get('myComment');

  try {
    if (!gameName || !myComment)
      throw new Error('game name and comment required');
    await sql`INSERT INTO myGames (Name, myComment) VALUES (${gameName}, ${myComment});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const games = await sql`SELECT * FROM myGames;`;
  return NextResponse.json({ games }, { status: 200 });
}
