import axios from 'axios';
import GameListDetails from '../search/gameListResult';
import ReloadBtn from './reloadBtn';

async function getData() {
  try {
    const count = (
      await axios.get(
        `https://api.rawg.io/api/games?key=c89a0b30250d4a53984fe0dbcf32ce22`
      )
    ).data.count;
    const numberOfPage = Math.floor(count / 20);
    const randomPage = Math.floor(Math.random() * (numberOfPage - 1) + 1);
    const gameList = await axios.get(
      `https://api.rawg.io/api/games?key=c89a0b30250d4a53984fe0dbcf32ce22&page=${randomPage}`
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
      <div className='mx-auto w-2/3  grid grid-cols-1 text-white justify-center gap-4'>
        <ReloadBtn />
        <GameListDetails listData={gameList} />
      </div>
    </div>
  );
}
