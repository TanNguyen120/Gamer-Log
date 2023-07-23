import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import IconPlatform from './platformIcon';

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
      {/* Below Components will show when hover parent component */}
      <div className=' hidden group-hover:flex flex-col py-2 px-5 divide-y text-slate-400 text-sm gap-4 divide-y-1'>
        <div className=' grid grid-cols-2'>
          <div>My Rating : </div>
          <div className=' text-right capitalize'>{myRating}</div>
        </div>
        <div className=' grid grid-cols-2 py-2'>
          <div>Release Date : </div>
          <div className=' text-right'>{gameDetails.released}</div>
        </div>
        <div className=' grid grid-cols-2 py-3 text'>
          <div>Developers:</div>
          <div className='  flex flex-col text-sm text-right'>
            {gameDetails.developers.map((e: any, i: number) => (
              <div key={i}>{e.name}</div>
            ))}
          </div>
        </div>
        <div className=' grid grid-cols-2 py-3'>
          <div>Store:</div>
          <div className=' text-right flex flex-col text-sm'>
            {gameDetails.stores.map((e: any, i: number) => (
              <div key={i}>{e.store.name}</div>
            ))}
          </div>
        </div>
        <div className=' grid grid-cols-2 py-2'>
          <div
            className='hover:cursor-pointer'
            title='ESRB ratings provide information about what`s in a game or app so parents and consumers can make informed choices about which games are right for their family. Ratings have 3 parts: Rating Categories, Content Descriptors, and Interactive Elements.'
          >
            Esrp Rating :{' '}
          </div>
          <div className=' text-right'>
            {gameDetails.esrb_rating
              ? gameDetails.esrb_rating.name
              : 'no rating'}
          </div>
        </div>
      </div>
    </div>
  );
}
