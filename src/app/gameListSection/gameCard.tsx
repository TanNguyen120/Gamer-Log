import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function CardContent({ gameDetails }: { gameDetails: object }) {
  return (
    <div className='flex flex-col bg-slate-700 '>
      <Link href={'/games-name'}>
        <Image
          src={gameDetails.background_image}
          width={480}
          height={270}
          alt={gameDetails.name}
        />
      </Link>
      <div className=' text-slate-200 text-xl font-medium m-auto'>
        {gameDetails.name}
      </div>
    </div>
  );
}

export default function GameCard() {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        // const headers = {
        //   'Content-Type': 'application/json',
        //   Authorization: process.env.API_KEY,
        // };
        const resData = await axios.get(
          `https://api.rawg.io/api/games/total-war-warhammer-ii?key=c89a0b30250d4a53984fe0dbcf32ce22`
        );
        setApiData(resData.data);
      } catch (error) {
        alert(JSON.stringify(error));
      }
    };
    getData();
  }, []);
  return (
    <div className=' rounded-lg border border-slate-300'>
      {apiData ? <CardContent gameDetails={apiData} /> : 'Loading'}
    </div>
  );
}
