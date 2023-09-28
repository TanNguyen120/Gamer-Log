import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

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

    await sql`UPDATE mygames SET myComment = ${gameData.comment}, score=${gameData.score}  WHERE name=${gameData.slug};`;
    // Because we have a constrain in database so we just add the genres and catch any error if there already that game genres in database
    try {
      for await (const e of gameData.genres) {
        await sql`INSERT INTO genres (name, game) VALUES (${e.name}, ${gameData.slug})`;
      }
    } catch (error) {
      console.log('Duplicate Game Genres');
    }
    return NextResponse.json({ mess: 'success' }, { status: 200 });
  } catch (error) {
    console.error(JSON.stringify(error));
    return NextResponse.json({ mess: error }, { status: 500 });
  }
}
