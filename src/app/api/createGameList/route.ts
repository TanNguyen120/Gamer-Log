import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // const result =
    //   await sql`CREATE TABLE myGames ( Name varchar(255), myComment varchar(255) );`;
    return NextResponse.json({ mess: 'ok' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
