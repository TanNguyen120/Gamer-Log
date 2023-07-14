import { MdOutlineExplore } from 'react-icons/md';
import SearchComponent from './searchBar';

export default function Header() {
  return (
    <div className='flex flex-row items-center p-4'>
      <div className=' text-3xl font-semibold text-white font-mono'>
        T-BackLog
      </div>
      <div className=' text-slate-200 mr-3 ml-auto text-lg'>Games</div>
      <SearchComponent />
      <div className=' px-2 py-1 bg-pink-600 text-white mr-3 ml-3 font-semibold rounded-md'>
        <MdOutlineExplore className=' inline' /> Explore
      </div>
    </div>
  );
}
