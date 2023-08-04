import RatingArea from '@/component/ratingArea';
import RequirementSection from '@/component/requirementSection';
import TileHeader from '@/component/tile';
import axios from 'axios';
import { AiFillStar } from 'react-icons/ai';

async function getData(gameName: string) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${gameName}?key=c89a0b30250d4a53984fe0dbcf32ce22`
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
  const apiData = await getData(params.gameName);

  {
    /* <div
    style={{ backgroundImage: `url(${apiData.background_image})` }}
    className=' bg-cover bg-opacity-80 container flex flex-col'
  >
    {JSON.stringify(apiData)}
  </div> */
  }
  return (
    <div
      style={{
        backgroundImage: `url(${apiData.background_image})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        height: '1080px',
        backgroundSize: 'cover',
        backgroundColor: 'black',
      }}
      className=' grid grid-cols-1'
    >
      <div className='bg-black bg-opacity-80'>
        <div className='mx-auto w-2/3  grid grid-cols-1 text-white justify-center gap-4'>
          <div className='text-left flex flex-col'>
            <div className='text-5xl font-bold mt-96'>{apiData.name}</div>
            <div className=' flex flex-row mt-2 text-slate-400'>
              <div>
                release on {apiData.released}, by {apiData.publishers[0].name}{' '}
              </div>
            </div>
          </div>
          <div className=' flex flex-col'>
            <div className=' text-2xl font-semibold'>
              Rating: {apiData.rating}
            </div>
            <div>
              {apiData.ratings.map((e: any, i: number) => (
                <RatingArea id={e.id} title={e.title} key={i} count={e.count} />
              ))}
            </div>
          </div>
          <div className=' flex flex-col'>
            <TileHeader tile='About' />
            <div
              className=' text-slate-300  mx-auto indent-8 my-8'
              dangerouslySetInnerHTML={{ __html: apiData.description }}
            ></div>
          </div>
          <div className=' flex flex-col'>
            <TileHeader tile='Requirements' />
            <div className=' flex flex-col divide-y divide-slate-600 bg-black bg-opacity-10'>
              {apiData.platforms.map((e: any, i: number) => (
                <RequirementSection
                  key={i}
                  requirement={e.requirements}
                  platformName={e.platform.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
