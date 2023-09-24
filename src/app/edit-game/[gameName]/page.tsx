import axios from 'axios';

async function findGame(gameName: string) {
  try {
    const result = await axios.get(
      `${process.env.SEVER_URL}/api/findGame?gameName=${gameName}`
    );
    return result.data;
  } catch (error) {
    console.error(JSON.stringify(error));
    return error;
  }
}

async function getRawgData(slug: string) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${slug}?key=${process.env.API_KEY}`
    );

    return resData.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
}

export default async function Page({
  params,
}: {
  params: { gameName: string };
}) {
  const gameData = await findGame(params.gameName);
  const gameDetails = await getRawgData(gameData.game.name);
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
        </div>
      </div>
    </div>
  );
}
