import axios from 'axios';
import TileHeader from '../tile';
import Link from 'next/link';

async function getData(gameName: string) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${gameName}/game-series?key=c89a0b30250d4a53984fe0dbcf32ce22`
    );
    return resData.data.results;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

export default async function SameSeries({ gameSlug }: { gameSlug: string }) {
  const seriesObject = await getData(gameSlug);
  return (
    <div className='grid grid-cols-1'>
      <TileHeader tile='In Series:' />
      {seriesObject.lenght > 0 ? (
        <ol className='list-disc ml-4 text-slate-400'>
          {seriesObject.map((e: any, i: number) => (
            <li key={i}>
              <Link href={`/game/${e.slug}`}>{e.name}</Link>
            </li>
          ))}
        </ol>
      ) : (
        'This one is unique'
      )}
    </div>
  );
}
