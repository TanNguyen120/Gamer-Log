import axios from 'axios';
import EditSection from './editContent';
import { sql } from '@vercel/postgres';

async function findGame(gameName: string) {
  try {
    const result =
      await sql`SELECT * FROM backlog WHERE backlog.game=${gameName};`;
    return result.rows[0];
  } catch (error) {
    console.error(JSON.stringify(error));
    return error;
  }
}

async function getRawData(slug: any) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${slug}?key=${process.env.API_KEY}`
    );

    return resData.data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

export default async function Page({
  params,
}: {
  params: { gameName: string };
}) {
  const gameData = await findGame(params.gameName);
  const gameDetails = await getRawData(gameData.game);
  return (
    <div
      style={{
        backgroundImage: `url(${gameDetails.background_image})`,
      }}
      className=' bg-top bg-contain bg-local bg-no-repeat bg-neutral-900'
    >
      <div className='bg-black bg-opacity-80 min-h-screen'>
        <div className='mx-auto w-2/3  grid grid-cols-1 text-white justify-center gap-4'>
          <div className='text-left flex flex-col'>
            <div className='text-5xl font-bold mt-96'>{gameDetails.name}</div>
          </div>
          {/* We have to pass genres and score for the case user is completed the goal and add game to backlog */}
          <EditSection
            goal={gameData.goal}
            slug={gameDetails.slug}
            genres={gameDetails.genres}
            score={gameDetails.score}
          />
        </div>
      </div>
    </div>
  );
}
