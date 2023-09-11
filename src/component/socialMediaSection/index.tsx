import Link from 'next/link';
import TileHeader from '../tile';
import { AiOutlineReddit } from 'react-icons/ai';
import { BsGlobe, BsMeta } from 'react-icons/bs';
import Image from 'next/image';
export default function SocialMediaSection({
  socialObject,
}: {
  socialObject: any;
}) {
  return (
    <div className=' flex flex-col'>
      <TileHeader tile='Social Media' />
      <div className=' flex flex-col divide-y divide-slate-600 gap-3'>
        <div className='flex flex-row  text-slate-300'>
          <Link
            className='flex flex-row mr-4 gap-1'
            href={socialObject.reddit_url ? socialObject.reddit_url : ''}
          >
            {' '}
            <AiOutlineReddit className='inline mt-1 mr2' /> Reddit:
          </Link>
          <div className=' text-slate-400'>
            {socialObject.reddit_description
              ? socialObject.reddit_description
              : 'No subreddit yet'}
          </div>
          {socialObject.reddit_logo && (
            <Image
              width={120}
              height={120}
              src={socialObject.reddit_logo}
              alt='subreddit logo'
            />
          )}
        </div>
        {/* ============================================================================================ */}
        <div className='flex flex-row  text-slate-300 pt-2'>
          <Link
            className='flex flex-row mr-4 gap-1'
            href={socialObject.website ? socialObject.website : ''}
          >
            {' '}
            <BsGlobe className='inline pt-2 pr2' /> Official Website:
          </Link>
          <Link
            href={socialObject.website ? socialObject.website : ''}
            className=' text-slate-400'
          >
            {socialObject.website ? socialObject.website : 'None'}
          </Link>
        </div>
        {/* ============================================================================================ */}

        <div className='flex flex-row  text-slate-300 pt-2'>
          <Link
            className='flex flex-row mr-4 gap-1'
            href={
              socialObject.metacritic_url ? socialObject.metacritic_url : ''
            }
          >
            {' '}
            <BsMeta className='inline pt-2 pr2' /> Metacritic:
          </Link>
          <Link
            href={
              socialObject.metacritic_url ? socialObject.metacritic_url : ''
            }
            className=' text-slate-400'
          >
            {socialObject.metacritic_url ? socialObject.metacritic_url : 'None'}
          </Link>
        </div>
      </div>
    </div>
  );
}
