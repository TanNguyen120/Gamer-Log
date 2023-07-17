import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CardContent from './cardContend';

export default function GameCard({ gameName }: { gameName: string }) {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        // const headers = {
        //   'Content-Type': 'application/json',
        //   Authorization: process.env.API_KEY,
        // };
        const resData = await axios.get(
          `https://api.rawg.io/api/games/${gameName}?key=c89a0b30250d4a53984fe0dbcf32ce22`
        );
        setApiData(resData.data);
      } catch (error) {
        alert(JSON.stringify(error));
      }
    };
    getData();
  }, [gameName]);
  return (
    <div className=' rounded-lg'>
      {apiData ? <CardContent gameDetails={apiData} /> : 'Loading'}
    </div>
  );
}
