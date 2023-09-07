import { useEffect, useState } from 'react';
import GameCard from './gameCard';
import gameList from '@/gameList.json';
import { GameCount } from './gameCount';

export default function GameListSection() {
  return (
    <div className=' flex flex-col'>
      <div className=' flex flex-row text-slate-300 mt-2'>
        <div className=' mx-2 mb-2'>Games Played:</div>
        <div>
          <GameCount />
        </div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {gameList['game-list'].map((e: any, i: number) => (
          <GameCard
            key={i}
            gameName={e.name}
            myComment={e.myComment}
            gameDetails={undefined}
          />
        ))}
      </div>
    </div>
  );
}
