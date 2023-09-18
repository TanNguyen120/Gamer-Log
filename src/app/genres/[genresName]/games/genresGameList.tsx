'use client';

import GameListDetails from '@/app/search/gameListResult';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { type } from 'os';
import PageSelector from '@/app/platform/[platformName]/games/pageSelector';

export default interface PageList {
  id: number;
  next: string;
  prev: string;
  results: any;
}

export default function GenresGames({
  genresName,
  apiKey,
}: {
  genresName: string;
  apiKey: string | undefined;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [gameList, setGameList] = useState(null);
  useEffect(() => {
    const getPlatformGame = async (platformId: string) => {
      try {
        console.log(apiKey);
        const resData = await axios.get(
          `https://api.rawg.io/api/games?key=${apiKey}&genres=${platformId}&page=${currentPage}`
        );
        console.log(resData.data);
        setGameList(resData.data);
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    };
    getPlatformGame(genresName);
  }, [currentPage, genresName, apiKey]);
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
