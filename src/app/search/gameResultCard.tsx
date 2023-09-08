'use client';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className=' rounded-lg bg-neutral-900 w-fit grid grid-cols-1 m-3'>
      <Link href={`/game/${slug}`}>
        <Image
          src={bgImg ? bgImg : '/deadLink.png'}
          width={640}
          height={480}
          alt='game image'
          className=' rounded-t-lg'
        />
      </Link>
      <Link
        href={`/game/${slug}`}
        className='mx-3 text-xl font-semibold text-slate-100 mt-3'
      >
        {gameName}
      </Link>
      <div className='mx-3 flex flex-row text-slate-300 mb-3'>
        <div className=' mr-2'>Slug: </div>
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
