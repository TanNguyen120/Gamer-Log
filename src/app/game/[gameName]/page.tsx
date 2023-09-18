import ScreenShotSection from '@/component/gamePicSection';
import SameSeries from '@/component/inSeries';
import RatingArea from '@/component/ratingArea';
import RequirementSection from '@/component/requirementSection';
import SocialMediaSection from '@/component/socialMediaSection';
import TileHeader from '@/component/tile';
import axios from 'axios';
import type { Metadata, ResolvingMetadata } from 'next';

async function getData(gameName: string) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${gameName}?key=${process.env.API_KEY}`
    );
    const screenShot = await axios.get(
      `https://api.rawg.io/api/games/${gameName}/screenshots?key=${process.env.API_KEY}`
    );
    const results = {
      gameDetails: resData.data,
      screenShot: screenShot.data.results,
    };

    return results;
  } catch (error) {
    alert(JSON.stringify(error));
  }
}
//-------------------------------------------------------------------------------------------------------------------------------------
// All of this Just to get a dynamic web-tile

type Props = {
  params: { gameName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const gameName = params.gameName;

  // fetch data
  const gameObject = await getData(gameName);

  return {
    title: gameObject?.gameDetails.gameName,
    description: 'Game Details',
  };
}
//-------------------------------------------------------------------------------------------------------------

export default async function Page({
  params,
}: {
  params: { gameName: string };
}) {
  const apiData = await getData(params.gameName);
  const gameDetails = apiData?.gameDetails;

  {
    /* <div
    style={{ backgroundImage: `url(${gameDetails.background_image})` }}
    className=' bg-cover bg-opacity-80 container flex flex-col'
  >
    {JSON.stringify(gameDetails)}
  </div> */
  }
  return (
    <div
      style={{
        backgroundImage: `url(${gameDetails.background_image})`,
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
            <div className='text-5xl font-bold mt-96'>{gameDetails.name}</div>
            <div className=' flex flex-row mt-2 text-slate-400'>
              <div>
                release on {gameDetails.released}, by{' '}
                {gameDetails.publishers[0]
                  ? gameDetails.publishers[0].name
                  : 'No Data'}{' '}
              </div>
            </div>
          </div>
          <RatingArea gameDetails={gameDetails} />
          <div className=' flex flex-col'>
            <TileHeader tile='About' />
            <div
              className=' text-slate-300  mx-auto indent-8 my-8'
              dangerouslySetInnerHTML={{ __html: gameDetails.description }}
            ></div>
          </div>
          <div className=' grid grid-cols-2'>
            <div className=' flex flex-col'>
              <TileHeader tile='Platforms' />
              <div className=' flex flex-col pl-4'>
                {gameDetails.platforms.length > 0
                  ? gameDetails.platforms.map((e: any, i: number) => (
                      <div key={i}>{e.platform.name}</div>
                    ))
                  : 'No Data'}
              </div>
            </div>
            <div className=' flex flex-col'>
              <TileHeader tile='Genres' />
              <div className=' flex flex-col pl-4'>
                {gameDetails.genres.length > 0
                  ? gameDetails.genres.map((e: any, i: number) => (
                      <div key={i}>{e.name}</div>
                    ))
                  : 'No Data'}
              </div>
            </div>
          </div>
          <SocialMediaSection socialObject={gameDetails} />
          <ScreenShotSection screenShots={apiData?.screenShot} />
          <div className=' flex flex-col'>
            <TileHeader tile='Requirements' />
            <div className=' flex flex-col divide-y divide-slate-600 '>
              {gameDetails.platforms.map((e: any, i: number) => (
                <RequirementSection
                  key={i}
                  requirement={e.requirements}
                  platformName={e.platform.name}
                />
              ))}
            </div>
          </div>
          <SameSeries gameSlug={gameDetails.slug} />
        </div>
      </div>
    </div>
  );
}
