'use client';

import Header from '@/app/header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';
import GameListSection from './gameListSection';

export default function Home() {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          Authorization: process.env.API_KEY,
        };
        const resData = await axios.get(
          `https://api.rawg.io/api/games/factorio?key=c89a0b30250d4a53984fe0dbcf32ce22`
        );
        setApiData(resData.data);
      } catch (error) {
        alert(JSON.stringify(error));
      }
    };
    getData();
  }, []);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 text-white'>
      <div className=' w-3/4 flex flex-col'>
        <Header />
        <GameListSection />
        <div>{JSON.stringify(apiData)}</div>
      </div>
    </main>
  );
}
