import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import IconPlatform from './platformIcon';
import ExpandGameCard from './expandGameCard';

export default function CardContent({
  gameDetails,
  myRating,
}: {
  gameDetails: any;
  myRating: string;
}) {
  return (
    <div className='flex flex-col bg-neutral-800 hover:bg-neutral-700  rounded-lg border border-slate-600 h-full group'>
      <Link href={`/game/${gameDetails.slug}`}>
        <Suspense fallback={<p>Loading Image...</p>}>
          <Image
            src={
              gameDetails.background_image
                ? gameDetails.background_image
                : '/deadLink.png'
            }
            width={1820}
            height={960}
            alt={gameDetails.name}
            className=' rounded-t-lg  h-[16rem]'
          />
        </Suspense>
      </Link>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      <div className=' grid grid-cols-2 p-2'>
        <div className=' flex flex-row flex-wrap text-sm gap-2 items-center p-2 text-slate-300'>
          {gameDetails.platforms.length > 0
            ? gameDetails.platforms.map((e: any, i: number) => (
                <div className='' key={i}>
                  <IconPlatform platformName={e.platform.name} />
                </div>
              ))
            : 'No Data'}
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
      <ExpandGameCard gameDetails={gameDetails} myRating={myRating} />
    </div>
  );
}
