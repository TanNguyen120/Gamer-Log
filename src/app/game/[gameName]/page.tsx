import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

async function getData(gameName: string) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${gameName}?key=c89a0b30250d4a53984fe0dbcf32ce22`
    );
    return resData.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
}

export default async function Page({
  params,
}: {
  params: { gameName: string };
}) {
  const apiData = await getData(params.gameName);
  return (
    <main className=' bg-slate-700 text-white'>
      <div className=' w-3/4 flex flex-col'>{JSON.stringify(apiData)}</div>
    </main>
  );
}
