'use client';
import gameList from '@/gameList.json';
import { useEffect, useState } from 'react';

export function GameCount() {
  const [gamePlayed, setGamePlayed] = useState(0);

  useEffect(() => {
    setGamePlayed(gameList['game-list'].length);
  }, []);
  return <>{gamePlayed}</>;
}
