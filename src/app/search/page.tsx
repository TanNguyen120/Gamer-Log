import axios from 'axios';

async function getData(gameName: any) {
  try {
    console.log('the page ' + gameName);
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${gameName}?key=c89a0b30250d4a53984fe0dbcf32ce22`
    );

    return resData.data;
  } catch (error) {
    console.log(JSON.stringify(error));
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

  {
    /* <div
    style={{ backgroundImage: `url(${gameDetails.background_image})` }}
    className=' bg-cover bg-opacity-80 container flex flex-col'
  >
    {JSON.stringify(gameDetails)}
  </div> */
  }
  return (
    <div className='bg-black min-h-screen'>
      <div className='mx-auto w-2/3  grid grid-cols-1 text-white justify-center gap-4'>
        <div className='text-left flex flex-col'></div>
        <div>{JSON.stringify(apiData)}</div>
      </div>
    </div>
  );
}
