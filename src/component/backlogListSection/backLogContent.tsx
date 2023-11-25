'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useRef, useState } from 'react';
import IconPlatform from '../gameListSection/gameCard/platformIcon';

const backlogAnimate = {
  hideTile: {
    opacity: 0,
    x: -100,
  },
  showTile: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
  hideGoal: {
    opacity: 0,
    x: 100,
  },
  showGoal: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

export default function BackLogCardContent({
  gameDetails,
  goal,
}: {
  gameDetails: any;
  goal: string;
}) {
  const ref = useRef(null);
  const isView = useInView(ref);
  return (
    <div
      ref={ref}
      className='flex flex-col bg-neutral-800 hover:bg-neutral-700  rounded-lg border border-slate-600 h-full group'
    >
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
      <div className=' flex flex-row flex-wrap text-sm gap-2 items-center p-2 text-slate-300 pl-3'>
        {gameDetails.platforms.length > 0
          ? gameDetails.platforms.map((e: any, i: number) => (
              <div className='' key={i}>
                <IconPlatform platformName={e.platform.name} />
              </div>
            ))
          : 'No Data'}
      </div>
      <Link
        href={`/game/${gameDetails.slug}`}
        className=' text-slate-200 text-2xl font-semibold ml-2 pt-2 px-2'
      >
        {gameDetails.name}
      </Link>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}
      <div className=' flex flex-row align-middle py-5 pl-3'>
        <motion.div
          variants={backlogAnimate}
          animate={isView ? 'showTile' : 'hideTile'}
          className='ml-1 my-auto '
        >
          Goal:
        </motion.div>
        <motion.div
          variants={backlogAnimate}
          animate={isView ? 'showGoal' : 'hideGoal'}
          className='rounded-lg bg-slate-400 opacity-20 ml-10  m-2 p-2 text-slate-700'
        >
          {goal}
        </motion.div>
      </div>
    </div>
  );
}
