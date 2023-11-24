'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';

export default function BackLogCardContent({
  gameDetails,
  goal,
}: {
  gameDetails: any;
  goal: string;
}) {
  return (
    <motion.div className='flex flex-col bg-neutral-800 hover:bg-neutral-700  rounded-lg border border-slate-600 h-full group'>
      <Link href={`/game/${gameDetails.slug}`}>
        <Suspense fallback={<p>Loading Image...</p>}>
          <Image
            src={
              gameDetails.background_image
                ? gameDetails.background_image
                : '/deadLink.png'
            }
            width={1820}
            height={960}
            alt={gameDetails.name}
            className=' rounded-t-lg  h-[16rem]'
          />
        </Suspense>
      </Link>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      <div className=' flex flex-row align-middle py-5 pl-3'>
        <motion.div className='ml:2 mr:auto my-auto '>Goal:</motion.div>
        <motion.div className='rounded-lg bg-slate-400 opacity-20 ml-10  m-2 p-2 text-slate-700'>
          {goal}
        </motion.div>
      </div>
    </motion.div>
  );
}
