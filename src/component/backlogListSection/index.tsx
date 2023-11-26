import { sql } from '@vercel/postgres';
import { GameCount } from '../gameListSection/gameCount';
import BacklogCard from './backlogCard';

const shuffle = (array: Array<any>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

async function getGamesList() {
  const games = await sql`SELECT * FROM backlog;`;
  return shuffle(games.rows);
}

export default async function BackLogSection() {
  const gameList = await getGamesList();
  return (
    <div className=' flex flex-col border-t border-slate-200 pt-2'>
      <div className=' flex flex-row text-slate-300 mt-2'>
        <div className=' mx-2 mb-2'>Game in Backlog:</div>
        <div>
          <GameCount gamesNumber={gameList.length} />
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {gameList.length > 0 &&
          gameList.map((e: any, i: number) => (
            <BacklogCard key={i} name={e.game} goal={e.goal} />
          ))}
      </div>
    </div>
  );
}
