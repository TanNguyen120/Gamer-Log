import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameName = searchParams.get('name');
  const goal = searchParams.get('goal');
  const masterCode = searchParams.get('masterCode');
  try {
    if (!masterCode || masterCode != process.env.MASTER_CODE) {
      throw new Error('you are not the master');
    }
    if (!gameName || !goal) throw new Error('game name and comment required');
    await sql`INSERT INTO backlog (name, goal) VALUES (${gameName}, ${goal});`;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
  return NextResponse.json({ mess: 'success' }, { status: 200 });
}

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request

  const gameData = await req.json();
  try {
    if (
      !gameData.masterCode ||
      gameData.masterCode != process.env.MASTER_CODE
    ) {
      console.error('not the master');
      throw new Error('you are not the master');
    }
    console.log('backlog:' + gameData);
    await sql`INSERT INTO backlog (game, goal) VALUES (${gameData.slug}, ${gameData.goal});`;
    return NextResponse.json({ mess: 'success' }, { status: 200 });
  } catch (error) {
    console.error(JSON.stringify(error));
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });
  }
}
