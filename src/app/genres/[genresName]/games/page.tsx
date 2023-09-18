import axios from 'axios';
import GenresGames from './genresGameList';
// import PlatformGame from './platFormGame';

async function getData(genresName: string) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/genres/${genresName}?key=${process.env.API_KEY}`
    );

    return resData.data;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

export default async function Genres({
  params,
}: {
  params: { genresName: string };
}) {
  const genresData = await getData(params.genresName);
  return (
    <div
      style={{
        backgroundImage: `url(${genresData.image_background})`,
        // backgroundPosition: 'top',
        // backgroundRepeat: 'no-repeat',
        // height: '1080px',
        // backgroundSize: 'cover',
        // backgroundColor: 'black',
      }}
      className=' bg-top bg-contain bg-no-repeat bg-neutral-900'
    >
      <div className='bg-black bg-opacity-80 min-h-screen'>
        <div className='mx-auto w-2/3  grid grid-cols-1 text-white justify-center gap-4  divide-y divide-slate-600'>
          <div className='text-left flex flex-col'>
            <div className='text-5xl font-bold mt-96'>{genresData.name}</div>
            <div className='text-base text-slate-400'>
              {genresData.games_count} Games
            </div>
          </div>
          <div
            className=' text-slate-300  mx-auto indent-8 my-8 pt-4'
            dangerouslySetInnerHTML={{ __html: genresData.description }}
          ></div>
          <GenresGames
            genresName={genresData.slug}
            apiKey={process.env.API_KEY}
          />
        </div>
      </div>
    </div>
  );
}
