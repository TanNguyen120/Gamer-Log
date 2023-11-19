'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BsDatabaseFillAdd } from 'react-icons/bs';

export default function GameResultCard({
  gameName,
  bgImg,
  slug,
}: {
  gameName: string;
  bgImg: string;
  slug: string;
}) {
  return (
    <div className=' rounded-lg bg-neutral-900 w-fit grid grid-cols-1 m-3 h-fit'>
      <Link href={`/game/${slug}`}>
        <Image
          src={bgImg ? bgImg : '/deadLink.png'}
          width={1280}
          height={960}
          alt='game image'
          className=' rounded-t-lg'
        />
      </Link>
      <Link
        href={`/add-game?slug=${slug}`}
        className=' mt-4 ml-2 rounded-lg p-2 bg-pink-700 font-semibold text-white w-fit'
      >
        Add <BsDatabaseFillAdd className='inline pb-1' />
      </Link>
      <Link
        href={`/game/${slug}`}
        className='mx-3 text-xl font-semibold text-slate-100 mt-3'
      >
        {gameName}
      </Link>
      <div className='mx-3 flex flex-row text-slate-300 mb-3'>
        <div
          title='copy to clipboard'
          className=' hover:cursor-copy'
          onClick={() => navigator.clipboard.writeText(slug)}
        >
          {slug}
        </div>
      </div>
    </div>
  );
}
