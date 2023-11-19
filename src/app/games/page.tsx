import axios from 'axios';
import GameListDetails from '../search/gameListResult';
import ReloadBtn from './reloadBtn';

async function getData() {
  try {
    const count = (
      await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
      )
    ).data.count;
    const numberOfPage = Math.floor(count / 20);
    const randomPage = Math.floor(Math.random() * (numberOfPage - 1) + 1);
    const gameList = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${randomPage}`
    );

    return gameList.data;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

export default async function Games() {
  const gameList = await getData();
  return (
    <div className='bg-black min-h-screen'>
      <div className='lg:mx-auto lg:w-2/3 mx-2  grid grid-cols-1 text-white justify-center gap-4'>
        <ReloadBtn />
        <GameListDetails listData={gameList} />
      </div>
    </div>
  );
}
