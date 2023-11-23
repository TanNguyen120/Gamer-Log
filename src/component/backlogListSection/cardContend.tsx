'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';

export default function BackLogCardContent({
  gameDetails,
  myRating,
}: {
  gameDetails: any;
  myRating: string;
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
      <div className=' flex flex-row'>
        <motion.div className='ml:2 mr:auto '>Goal:</motion.div>
      </div>
    </motion.div>
  );
}
