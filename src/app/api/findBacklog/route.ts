import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameName = searchParams.get('gameName');
  console.log(`GAGAG SELECT * FROM backlog WHERE game = ${gameName}`);
  const game =
    await sql`SELECT * FROM backlog WHERE backlog.game = ${gameName}`;
  NextResponse.json({ game: game.rows[0] }, { status: 200 });
}
