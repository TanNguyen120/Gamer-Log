import axios from 'axios';
import AddSection from './addSection';

async function getData(gameName: string) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${gameName}?key=${process.env.API_KEY}`
    );

    return resData.data;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const slug = searchParams['slug'] ?? ''; // default value is "";
  const gameData = await getData(slug);
  return (
    <div
      style={{
        backgroundImage: `url(${gameData.background_image})`,
        // backgroundPosition: 'top',
        // backgroundRepeat: 'no-repeat',
        // height: '1080px',
        // backgroundSize: 'cover',
        // backgroundColor: 'black',
      }}
      className=' bg-top bg-contain bg-local bg-no-repeat bg-neutral-900'
    >
      <div className='bg-black bg-opacity-80 min-h-screen'>
        <div className='mx-auto w-2/3  grid grid-cols-1 text-white justify-center gap-4'>
          <div className='text-left flex flex-col'>
            <div className='text-5xl font-bold mt-96'>{gameData.name}</div>
            <AddSection
              slug={gameData.slug}
              score={gameData.metacritic}
              genres={gameData.genres}
              severUrl={process.env.SEVER_URL}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
