import axios from 'axios';
import PlatformGame from './platFormGame';

async function getData(platformName: string) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/platforms/${platformName}?key=${process.env.API_KEY}`
    );

    return resData.data;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

export default async function Platforms({
  params,
}: {
  params: { platformName: string };
}) {
  const platformData = await getData(params.platformName);
  return (
    <div
      style={{
        backgroundImage: `url(${platformData.image_background})`,
        // backgroundPosition: 'top',
        // backgroundRepeat: 'no-repeat',
        // height: '1080px',
        // backgroundSize: 'cover',
        // backgroundColor: 'black',
      }}
      className=' bg-top bg-contain bg-no-repeat bg-neutral-900'
    >
      <div className='bg-black bg-opacity-80 min-h-screen'>
        <div className='lg:mx-auto lg:w-2/3 mx-2  grid grid-cols-1 text-white justify-center gap-4  divide-y divide-slate-600'>
          <div className='text-left flex flex-col'>
            <div className='text-5xl font-bold mt-96'>{platformData.name}</div>
            <div className='text-base text-slate-400'>
              {platformData.games_count} Games
            </div>
          </div>
          <div
            className=' text-slate-300  mx-auto indent-8 my-8 pt-4'
            dangerouslySetInnerHTML={{ __html: platformData.description }}
          ></div>
          <PlatformGame
            platformId={platformData.id}
            apiKey={process.env.API_KEY}
          />
        </div>
      </div>
    </div>
  );
}
