import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gameName = searchParams.get('name');
  const myComment = searchParams.get('myComment');
  const masterCode = searchParams.get('masterCode');

  try {
    if (!masterCode || masterCode != process.env.MASTER_CODE) {
      throw new Error('you are not the master');
    }
    if (!gameName || !myComment)
      throw new Error('game name and comment required');
    await sql`INSERT INTO myGames (Name, myComment) VALUES (${gameName}, ${myComment});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const games = await sql`SELECT * FROM myGames;`;
  return NextResponse.json({ games }, { status: 200 });
}

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const gameData = await req.json();
  console.log('request JSON: ' + JSON.stringify(gameData));
  try {
    if (
      !gameData.masterCode ||
      gameData.masterCode != process.env.MASTER_CODE
    ) {
      throw new Error('you are not the master');
    }
    await sql`INSERT INTO myGames (Name, myComment, score) VALUES (${gameData.slug}, ${gameData.comment}, ${gameData.score});`;
    for await (const e of gameData.genres) {
      await sql`INSERT INTO genres (game, name) VALUES (${gameData.slug}, ${e.slug});`;
    }
    return NextResponse.json({ mess: 'success' }, { status: 200 });
  } catch (error) {
    console.error(JSON.stringify(error));
    return NextResponse.json({ error }, { status: 500 });
  }
}
