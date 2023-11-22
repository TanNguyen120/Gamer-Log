'use client';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { type } from 'os';
import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';

// support call api handle
async function addGameData(
  slug: string,
  score: any,
  comment: string,
  genres: Array<any>,
  setMes: Function,
  masterCode: string
) {
  try {
    const gameBody = {
      slug: slug,
      score: score,
      comment: comment,
      genres: genres,
      masterCode: masterCode,
    };
    const currentUrl = new URL(window.location.href);
    const url = currentUrl.origin;
    const res = await axios.post(`${url}/api/addGame`, gameBody);
    setMes(res.data.mess);
  } catch (error: any) {
    setMes('error: ' + error.message);
  }
}

// animation variation
const labelAnimate = {
  inactive: { scale: 0.5, color: '#475569' },
  active: {
    scale: 1,
    color: '#cbd5e1',
    transition: { duration: 1, type: 'spring', bounce: 0.8 },
  },
};

export default function AddSection({
  slug,
  score,
  genres,
}: {
  slug: string;
  score: any;
  genres: Array<any>;
}) {
  const [commentText, setCommentText] = useState('');
  const [resultMes, setResultMes] = useState('');
  const [messCss, setMessCss] = useState(' hidden');
  const [masterCode, setMasterCode] = useState('');
  const [goal, setGoal] = useState('');
  const [addPlayed, setAddPlayed] = useState(true);
  useEffect(() => {
    resultMes !== ''
      ? resultMes.includes('success')
        ? setMessCss(' text-green-600 ')
        : setMessCss(' text-red-600')
      : setMessCss(' hidden');
  }, [resultMes]);

  useEffect(() => {
    console.log('is add: ' + addPlayed);
  }, [addPlayed]);
  return (
    <div className='flex flex-col pt-5'>
      <div className='flex flex-row gap-3 my-2'>
        <motion.div
          variants={labelAnimate}
          animate={addPlayed ? 'active' : 'inactive'}
        >
          Add to Game Played
        </motion.div>
        <motion.div
          className={`h-7 w-12 p-1 rounded-lg bg-slate-400 hover:cursor-pointer flex flex-row ${
            addPlayed ? ' justify-start' : ' justify-end'
          }`}
          onClick={(e) => setAddPlayed((prev) => !prev)}
        >
          <motion.div
            layout
            transition={{ type: 'spring', duration: 1, bounce: 0.7 }}
            className='h-5 w-5 rounded-full bg-slate-200'
          ></motion.div>
        </motion.div>
        <motion.div
          variants={labelAnimate}
          animate={!addPlayed ? 'active' : 'inactive'}
        >
          Add to Backlog
        </motion.div>
      </div>
      <div className={' font-semibold p-2 flex flex-row' + messCss}>
        <div>
          {resultMes.includes('success') ? (
            <AiOutlineCheckCircle className=' inline mr-1' />
          ) : (
            <AiOutlineWarning className=' inline mr-1' />
          )}
        </div>
        {resultMes}{' '}
      </div>
      <div>Enter Comment:</div>
      <AnimatePresence>
        {addPlayed ? (
          <motion.textarea
            initial={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            onChange={(e) => setCommentText(e.target.value)}
            className=' bg-neutral-800 border border-slate-400 text-slate-400 p-3'
            spellCheck='true'
            placeholder='add comment for this'
          ></motion.textarea>
        ) : (
          <motion.textarea
            initial={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            onChange={(e) => setGoal(e.target.value)}
            className=' bg-neutral-800 border border-slate-400 text-slate-400 p-3'
            spellCheck='true'
            placeholder=' add goal for this game'
          ></motion.textarea>
        )}
      </AnimatePresence>

      <div className=' py-4'>
        <label className='block text-gray-300 text-base font-bold mb-2'>
          Master Code
        </label>
        <input
          className='bg-neutral-800 shadow appearance-none border border-slate-500 rounded w-1/3 py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          id='password'
          type='password'
          placeholder='******************'
          onChange={(e) => setMasterCode(e.target.value)}
        />
        <p className='text-slate-500 text-xs italic'>
          Enter master code to prove that you are the master.
        </p>
      </div>
      <div
        className='mt-4 rounded-lg p-2 bg-pink-700 font-semibold text-white w-fit hover:cursor-pointer'
        onClick={(e) =>
          addGameData(
            slug,
            score,
            commentText,
            genres,
            setResultMes,
            masterCode
          )
        }
      >
        Submit
      </div>
    </div>
  );
}
