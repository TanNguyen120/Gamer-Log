'use client';

import GameListDetails from '@/app/search/gameListResult';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PageSelector from './pageSelector';
import { type } from 'os';

export default interface PageList {
  id: number;
  next: string;
  prev: string;
  results: any;
}

export default function PlatformGame({
  platformId,
  apiKey,
}: {
  platformId: string;
  apiKey: string | undefined;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [gameList, setGameList] = useState(null);
  useEffect(() => {
    const getPlatformGame = async (platformId: string) => {
      try {
        console.log(apiKey);
        const resData = await axios.get(
          `https://api.rawg.io/api/games?key=${apiKey}&platforms=${platformId}&page=${currentPage}`
        );
        console.log(resData.data);
        setGameList(resData.data);
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    };
    getPlatformGame(platformId);
  }, [currentPage, platformId, apiKey]);
  return (
    <div>
      {gameList ? <GameListDetails listData={gameList} /> : 'loading'}
      {gameList ? (
        <PageSelector
          platFormDetail={gameList}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        'loading'
      )}
    </div>
  );
}
