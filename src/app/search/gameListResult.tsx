import Image from 'next/image';
import GameResultCard from './gameResultCard';

export default function GameListDetails({ listData }: { listData: any }) {
  return (
    <div className='text-left grid grid-cols-1'>
      <div className=' text-sm text-slate-600 border-b border-slate-700 pb-2 mt-3'>
        There are {listData.count} results
      </div>
      <div className=' grid md:grid-cols-2 grid-cols-1 mt-3 gap-5 '>
        {listData.results.map((e: any, i: number) => (
          <GameResultCard
            key={i}
            bgImg={e.background_image}
            slug={e.slug}
            gameName={e.name}
          />
        ))}
      </div>
    </div>
  );
}
