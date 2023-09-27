// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';
// import gameList from '@/gameList.json';

// export async function GET(request: Request) {
//   try {
//     gameList['game-list'].forEach(async (element) => {
//       await sql`INSERT INTO myGames (Name, myComment) VALUES (${element.name}, ${element.myComment});`;
//     });
//     return NextResponse.json({ result: 'done' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
