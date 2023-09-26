import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const gameData = await req.json();

  try {
    if (
      !gameData.masterCode ||
      gameData.masterCode != process.env.MASTER_CODE
    ) {
      throw new Error('you are not the master');
    }
    console.log(JSON.stringify(gameData));
    await sql`UPDATE mygames SET myComment = ${gameData.comment}, score=${gameData.score}  WHERE name=${gameData.slug};`;
    // for await (const e of gameData.genres) {
    //   await sql`INSERT INTO genres (name, game) VALUES (${e.name}, ${gameData.slug}) WHERE NOT EXISTS ( SELECT * genres
    //                                                                                                     WHERE genres.name = ${e.name}
    //                                                                                                     AND genres.game = ${gameData.slug})`;
    // }
    return NextResponse.json({ mess: 'success' }, { status: 200 });
  } catch (error) {
    console.error(JSON.stringify(error));
    return NextResponse.json({ mess: error }, { status: 500 });
  }
}
