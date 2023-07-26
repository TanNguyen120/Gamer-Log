import axios from 'axios';
import Image from 'next/image';
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

  {
    /* <div
    style={{ backgroundImage: `url(${apiData.background_image})` }}
    className=' bg-cover bg-opacity-80 container flex flex-col'
  >
    {JSON.stringify(apiData)}
  </div> */
  }
  return (
    <div
      style={{
        backgroundImage: `url(${apiData.background_image})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        height: '1080px',
        backgroundSize: 'cover',
      }}
      className=''
    >
      <div className=' bg-slate-950 bg-opacity-90 grid grid-cols-1 text-white'>
        <div className=' w-48'>{JSON.stringify(apiData)}</div>
      </div>
    </div>
  );
}
