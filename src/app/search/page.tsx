import axios from 'axios';
import GameListDetails from './gameListResult';
import PageSelection from './PageSection';

async function getData(gameName: any) {
  try {
    console.log('Find List Of ' + gameName + ' games');
    const resData = await axios.get(
      `https://api.rawg.io/api/games?search=${gameName}&key=${process.env.API_KEY}`
    );

    return resData.data;
  } catch (error) {
    console.error('ERROR: ' + JSON.stringify(error));
    const resData = null;
    return resData;
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const gameName = searchParams['word'] ?? '1'; // default value is "1"
  const apiData = await getData(gameName);
  return (
    <div className='bg-black min-h-screen'>
      <div className='mx-auto w-2/3  grid grid-cols-1 text-white justify-center gap-4'>
        {apiData.count > 0 ? (
          <GameListDetails listData={apiData} />
        ) : (
          <div className=' text-xl font-semibold'>No Result</div>
        )}
        <PageSelection
          nextPage={apiData.next}
          prePage={apiData.previous}
          slug={gameName}
        />
      </div>
    </div>
  );
}
