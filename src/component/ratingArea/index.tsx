import { AiFillStar } from 'react-icons/ai';
import { deflate } from 'zlib';

function RatingRow({
  id,
  title,
  count,
}: {
  id: number;
  title: string;
  count: number;
}) {
  const startCount = (id: number) => {
    let content = [];
    for (let i = 0; i < id; i++) {
      content.push(<AiFillStar className='inline' key={id} />);
    }
    return content;
  };
  return (
    <div className=' flex flex-row my-1 items-baseline text-slate-300'>
      {startCount(id)} <span className=' mx-2'>{title}:</span>{' '}
      <span>{count}</span>
    </div>
  );
}

//=================================================================================================================================================================================================================================================
export default function RatingArea({ gameDetails }: { gameDetails: any }) {
  return (
    <div className=' grid grid-cols-1'>
      <div className='flex flex-row gap-2 items-baseline'>
        <div className=' text-2xl font-semibold'>Metacritic Score:</div>
        <div className=' rounded-lg border p-2 border-slate-600 w-min h-min'>
          {gameDetails.metacritic}
        </div>
      </div>
      <div className=' grid grid-cols-1'>
        <div className=' text-2xl font-semibold'>
          Rating: {gameDetails.rating}
        </div>
        <div>
          {gameDetails.ratings.map((e: any, i: number) => (
            <RatingRow title={e.tile} id={e.id} count={e.count} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
