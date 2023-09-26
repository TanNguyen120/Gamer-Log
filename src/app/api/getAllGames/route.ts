import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  const games = await sql`SELECT * FROM myGames;`;
  return NextResponse.json({ rows: games.rows }, { status: 200 });
}
