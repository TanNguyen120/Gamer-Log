import Image from 'next/image';
import Link from 'next/link';
import GameCard from './gameCard';

export default function GameListSection() {
  return (
    <div className=' flex flex-col'>
      <div className=' flex flex-row text-slate-300 mt-2'>
        <div className=' mx-2 '>Games Played:</div>
        <div>5</div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
        <GameCard />
      </div>
    </div>
  );
}
