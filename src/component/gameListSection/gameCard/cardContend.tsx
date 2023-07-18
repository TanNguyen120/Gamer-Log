import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import IconPlatform from './platformIcon';

export default function CardContent({ gameDetails }: { gameDetails: any }) {
  return (
    <div className='flex flex-col bg-slate-800  rounded-lg border border-slate-600 h-full'>
      <Link href={'/games-name'}>
        <Image
          src={gameDetails.background_image}
          width={480}
          height={270}
          alt={gameDetails.name}
          className=' rounded-t-lg  h-[16rem]'
        />
      </Link>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      <div className=' grid grid-cols-2 p-2'>
        <div className=' flex flex-row text-sm gap-2 items-center p-2 text-slate-300'>
          {gameDetails.platforms.map((e: any, i: number) => (
            <div className='' key={i}>
              <IconPlatform platformName={e.platform.name} />
            </div>
          ))}
        </div>
        <div className='flex  text-base justify-end text-slate-400 pl-auto pr-1 pt-1'>
          <div className=' mr-1'>Score:</div>
          <div
            className='
          '
          >
            {gameDetails.metacritic}
          </div>
        </div>
        {/* -------------------------------------------------------------------------------------------------------------------------- */}
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}

      <div className=' text-slate-200 text-2xl font-semibold ml-2 pt-2 px-2'>
        {gameDetails.name}
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}

      <div className=' flex flex-row text-sm ml-2 pl-2 text-slate-400'>
        {gameDetails.genres.map((e: any, i: number) => (
          <Link className=' m-1' key={i} href={`/genre/${e.name}`}>
            {e.name}
          </Link>
        ))}
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
}
