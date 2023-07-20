'use client';

import GameListSection from '@/component/gameListSection';
import Header from '@/component/header';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-900 text-white'>
      <div className=' w-3/4 flex flex-col'>
        <Header />
        <GameListSection />
      </div>
    </main>
  );
}
