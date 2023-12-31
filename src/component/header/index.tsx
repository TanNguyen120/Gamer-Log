import { MdOutlineExplore } from 'react-icons/md';
import SearchComponent from './searchBar';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex flex-row items-center p-4 border-b border-slate-600 bg-stone-900'>
      <Link
        href={'/'}
        className=' text-xl md:text-3xl font-semibold text-white font-mono'
      >
        T-BackLog
      </Link>
      <Link
        title='to a random set of game'
        href={'/games'}
        className=' text-slate-200 mr-3 ml-auto text-lg hidden md:inline'
      >
        Games
      </Link>
      <SearchComponent />
      <Link
        href={`/explore`}
        className=' px-1 md:px-2 md:py-1 bg-pink-600 text-white mr-3 ml-3 font-semibold rounded-md text-sm md:text-base'
      >
        <MdOutlineExplore className=' inline' /> Explore
      </Link>
    </div>
  );
}
