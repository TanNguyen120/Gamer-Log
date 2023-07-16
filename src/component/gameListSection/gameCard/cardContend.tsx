import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CardContent({ gameDetails }: { gameDetails: any }) {
  return (
    <div className='flex flex-col bg-slate-700 items-start rounded-lg'>
      <Link href={'/games-name'}>
        <Image
          src={gameDetails.background_image}
          width={480}
          height={270}
          alt={gameDetails.name}
        />
      </Link>
      <div className=' flex flex-row p-3 items-center'>
        <div className=' flex flex-row text-sm gap-2'>
          {gameDetails.platforms.map((e, i) => (
            <div className=' ' key={i}>
              {e.platform.name}
            </div>
          ))}
        </div>
        <div className='flex flex-row text-base text-slate-400 '>
          <div className=' mr-2'>Score:</div>
          <div>{gameDetails.metacritic}</div>
        </div>
      </div>
      <div className=' text-slate-200 text-xl font-medium ml-2 pt-2'>
        {gameDetails.name}
      </div>
    </div>
  );
}
