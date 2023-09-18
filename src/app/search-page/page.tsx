import axios from 'axios';
import GameListDetails from '../search/gameListResult';
import PageSelection from '../search/PageSection';

async function getData(slug: string, page: string) {
  try {
    console.log(
      `link is: https://api.rawg.io/api/games?search=${slug}&page=${page}&key=${process.env.API_KEY}`
    );
    const resData = await axios.get(
      `https://api.rawg.io/api/games?search=${slug}&page=${page}&key=${process.env.API_KEY}`
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
  searchParams: { [key: string]: string };
}) {
  const slug = searchParams['slug'] ?? ''; // default value is "1";
  const page = searchParams['page'] ?? '1'; // default value is "1";
  const apiData = await getData(slug, page);
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
          slug={slug}
        />
      </div>
    </div>
  );
}
