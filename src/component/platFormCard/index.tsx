import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default function PlatformCard({ platformData }: { platformData: any }) {
  return (
    <div className='flex flex-col bg-neutral-800 hover:bg-neutral-700  rounded-lg border border-slate-600'>
      <Link href={`/platform/${platformData.slug}/games`}>
        <Suspense fallback={<p>Loading Image...</p>}>
          <Image
            src={platformData.image_background}
            width={480}
            height={270}
            alt={platformData.name}
            className=' rounded-t-lg  h-[16rem]'
          />
        </Suspense>
      </Link>
      <Link
        href={`/platform/${platformData.slug}/games`}
        className=' text-slate-200 text-2xl font-semibold ml-2 pt-2 px-2'
      >
        {platformData.name}
      </Link>
      <div className='flex flex-row text-base text-slate-400 ml-4'>
        {platformData.games_count} Games
      </div>
    </div>
  );
}
