import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameName = searchParams.get('gameName');
  const game =
    await sql`SELECT * FROM myGames WHERE myGames.name = ${gameName} `;
  const genres =
    await sql`SELECT * FROM genres WHERE genres.game = ${gameName} `;
  return NextResponse.json(
    { game: game.rows[0], genres: genres.rows },
    { status: 200 }
  );
}
