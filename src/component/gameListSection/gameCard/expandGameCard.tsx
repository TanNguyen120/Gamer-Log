'use client';

import { motion, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const expandAnimate = {
  minimizeExpand: {
    height: '0%',
    type: 'srping',
    bounce: 0.5,
    transition: { duration: 0.8 },
  },
  hiddenExpand: {
    display: 'none',
    transition: { delay: 0.9 },
  },
  hiddenContent: (delayTime: number) => ({
    height: '0%',
    opacity: 0,
    transition: { delay: delayTime * 0.1 },
  }),
  showContent: (delayTime: number) => ({
    height: 'fit-content',
    opacity: 1,
    transition: { delay: delayTime * 0.3 },
  }),
  showExpand: {
    height: 'fit-content',
    transition: { duration: 0.8 },
    display: 'flex',
    type: 'spring',
    bounce: 0.5,
  },
  pointUp: {
    rotate: '0deg',
    transition: { duration: 0.5 },
  },
  pointDown: {
    rotate: '-180deg',
    transition: { duration: 0.5 },
  },
};

export default function ExpandGameCard({
  gameDetails,
  myRating,
}: {
  gameDetails: any;
  myRating: string;
}) {
  const [isShow, setIsShow] = useState(false);
  const expandControls = useAnimationControls();
  const pointerControls = useAnimationControls();
  const contendControls = useAnimationControls();
  useEffect(() => {
    if (isShow) {
      expandControls.start('showExpand');
      contendControls.start('showContent');
      pointerControls.start('pointDown');
    } else {
      pointerControls.start('pointUp');
      expandControls.start('minimizeExpand');
      expandControls.start('hiddenExpand');
      contendControls.start('hiddenContent');
    }
  }, [isShow, expandControls, pointerControls, contendControls]);
  return (
    <div
      className='flex flex-col'
      onMouseEnter={(e) => setIsShow(true)}
      onMouseLeave={(e) => setIsShow(false)}
    >
      <Link
        href={`/game/${gameDetails.slug}`}
        className=' text-slate-200 text-2xl font-semibold ml-2 pt-2 px-2'
      >
        {gameDetails.name}
      </Link>
      {/* -------------------------------------------------------------------------------------------------------------------------- */}

      <div className=' flex flex-row text-sm ml-2 pl-2 text-slate-400'>
        {gameDetails.genres.map((e: any, i: number) => (
          <Link className=' m-1' key={i} href={`/genres/${e.slug}/games`}>
            {e.name}
          </Link>
        ))}
      </div>
      <motion.div
        variants={expandAnimate}
        animate={pointerControls}
        className=' mr-2 ml-auto'
      >
        <IoIosArrowUp />
      </motion.div>

      <motion.div
        variants={expandAnimate}
        animate={expandControls}
        className=' flex-col py-2 px-5 divide-y text-slate-400 text-sm gap-4 divide-y-1'
      >
        <motion.div
          variants={expandAnimate}
          animate={contendControls}
          custom={1}
          className={` grid  ${
            myRating.length < 150
              ? ' grid-cols-2 text-right'
              : ' grid-cols-1 text-left'
          }`}
        >
          <div className='text-left'>My Comment : </div>
          <div className='  capitalize p-3 rounded-lg m-1 bg-slate-300 text-slate-700'>
            {myRating}
          </div>
        </motion.div>
        <motion.div
          variants={expandAnimate}
          animate={contendControls}
          custom={2}
          className=' grid grid-cols-2 py-2'
        >
          <div>Release Date : </div>
          <div className=' text-right'>
            {gameDetails ? gameDetails.released : 'no data'}
          </div>
        </motion.div>
        <motion.div
          variants={expandAnimate}
          animate={contendControls}
          custom={3}
          className=' grid grid-cols-2 py-3 text'
        >
          <div>Developers:</div>
          <div className='  flex flex-col text-sm text-right'>
            {gameDetails.developers.map((e: any, i: number) => (
              <div key={i}>{e.name}</div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={expandAnimate}
          animate={contendControls}
          custom={4}
          className=' grid grid-cols-2 py-3'
        >
          <div>Store:</div>
          <div className=' text-right flex flex-col text-sm'>
            {gameDetails.stores.map((e: any, i: number) => (
              <div key={i}>{e.store.name}</div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={expandAnimate}
          animate={contendControls}
          custom={5}
          className=' grid grid-cols-2 py-2 '
        >
          <div
            className='hover:cursor-pointer'
            title='ESRB ratings provide information about what`s in a game or app so parents and consumers can make informed choices about which games are right for their family. Ratings have 3 parts: Rating Categories, Content Descriptors, and Interactive Elements.'
          >
            Esrp Rating :{' '}
          </div>
          <div className=' text-right'>
            {gameDetails.esrb_rating
              ? gameDetails.esrb_rating.name
              : 'no rating'}
          </div>
        </motion.div>
        <motion.div
          variants={expandAnimate}
          animate={contendControls}
          custom={6}
          className=' grid grid-cols-1 pt-2'
        >
          <Link
            href={`/edit-game/${gameDetails.slug}`}
            className='py-1 px-2 rounded-lg bg-pink-500 text-white font-semibold w-fit mt-2'
          >
            Edit
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
