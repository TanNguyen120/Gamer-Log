import { useEffect, useState } from 'react';
import GameCard from './gameCard';
import gameList from '@/gameList.json';
import { GameCount } from './gameCount';
import axios from 'axios';
import { sql } from '@vercel/postgres';

const shuffle = (array: Array<any>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

async function getGamesList() {
  const games = await sql`SELECT * FROM myGames;`;
  return shuffle(games.rows);
}

export default async function GameListSection() {
  const gameList = await getGamesList();
  return (
    <div className=' flex flex-col'>
      <div className=' flex flex-row text-slate-300 mt-2'>
        <div className=' mx-2 mb-2'>Games Played:</div>
        <div>
          <GameCount gamesNumber={gameList.length} />
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {gameList.map((e: any, i: number) => (
          <GameCard
            key={i}
            gameName={e.name}
            myComment={e.mycomment}
            gameDetails={undefined}
          />
        ))}
      </div>
    </div>
  );
}
