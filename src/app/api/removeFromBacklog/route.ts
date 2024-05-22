import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const reqData = await req.json();
  try {
    if (!reqData.masterCode || reqData.masterCode != process.env.MASTER_CODE) {
      throw new Error('you are not the master');
    }
    await sql`DELETE FROM backlog WHERE WHERE game=${reqData.slug};`;
    return NextResponse.json({ mess: 'success' }, { status: 200 });
  } catch (error) {
    console.error(JSON.stringify(error));
    return NextResponse.json({ mess: JSON.stringify(error) }, { status: 500 });
  }
}
