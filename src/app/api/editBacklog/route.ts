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
    await sql`UPDATE backlog SET goal = ${gameData.goal} WHERE game=${gameData.slug};`;
    return NextResponse.json({ mess: 'success' }, { status: 200 });
  } catch (error) {
    console.error(JSON.stringify(error));
    return NextResponse.json({ mess: JSON.stringify(error) }, { status: 500 });
  }
}
