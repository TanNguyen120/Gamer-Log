'use client';

import { motion } from 'framer-motion';

export default function LoadingAnimation() {
  return (
    <div className=' flex flex-row justify-center w-screen gap-14'>
      <motion.div
        className=' w-20 h-20 bg-slate-100'
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          color: ['#c3e2d0', '#bcd2d0', '#adcfd8'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
          delay: 0.5,
        }}
      ></motion.div>
      <motion.div
        className=' w-20 h-20 bg-slate-100'
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          color: ['#c3e2d0', '#bcd2d0', '#adcfd8'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      ></motion.div>
      <motion.div
        className=' w-20 h-20 bg-slate-100'
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          color: ['#c3e2d0', '#bcd2d0', '#adcfd8'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1,
        }}
      ></motion.div>
    </div>
  );
}
