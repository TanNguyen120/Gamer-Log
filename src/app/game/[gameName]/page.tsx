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
      className=' grid grid-cols-1'
    >
      <div className='bg-neutral-950 bg-opacity-80'>
        <div className='mx-auto w-2/3  grid grid-cols-1 text-white justify-center gap-4'>
          <div className='text-left flex flex-col'>
            <div className='text-5xl font-bold mt-96'>{apiData.name}</div>
            <div className=' flex flex-row mt-2 text-slate-400'>
              <div>
                release on {apiData.released}, by {apiData.publishers[0].name}{' '}
              </div>
            </div>
          </div>
          <div className=' flex flex-col'>
            <div className=' text-2xl font-semibold'>About</div>
            <div
              className=' text-slate-300  mx-auto'
              dangerouslySetInnerHTML={{ __html: apiData.description }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
