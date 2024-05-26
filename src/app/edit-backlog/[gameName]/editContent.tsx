'use client';
import axios from 'axios';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

// call to add game api
async function addToPlayed(
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
    // get the origin url to call for serverless api
    const currentUrl = new URL(window.location.href);
    const url = currentUrl.origin;
    const res = await axios.post(`${url}/api/addGame`, gameBody);
    setMes(res.data.mess);
    // Delete the game from backlog list because it is in finished list
    await axios.post(`${url}/api/removeFromBacklog`, gameBody);
    // if success alert the user
    alert('success');
  } catch (error: any) {
    console.error('error:' + JSON.stringify(error));
    setMes('error: ' + JSON.stringify(error));
  }
}

// Delete Game from Backlog function because I cant complete or abandon it
async function removeFromBackLog(
  slug: string,
  masterCode: string,
  router: any
) {
  const body = {
    slug: slug,
    masterCode: masterCode,
  };
  try {
    const currentUrl = new URL(window.location.href);
    const url = currentUrl.origin;

    await axios.post(`${url}/api/removeFromBacklog`, body);
    // IF the request success redirect to home
    alert('Operation is success and we will go back to home page');
    router.push('/');
  } catch (error) {
    console.error('error:' + JSON.stringify(error));
    alert('Request Fails');
  }
}

// call to edit backlog api
// call to add game api
async function editBacklog(
  slug: string,
  goal: any,
  setMes: Function,
  masterCode: string
) {
  try {
    const gameBody = {
      slug: slug,
      goal: goal,
      masterCode: masterCode,
    };
    // get the origin url to call for serverless api
    const currentUrl = new URL(window.location.href);
    const url = currentUrl.origin;
    const res = await axios.post(`${url}/api/editBacklog`, gameBody);
    setMes(res.data.mess);
  } catch (error: any) {
    console.error('error:' + JSON.stringify(error));
    setMes('error: ' + JSON.stringify(error));
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
  changing: {
    scale: [0, 1],
    x: [50, 0],
    transition: { duration: 0.8 },
  },
};

export default function EditSection({
  goal,
  slug,
  score,
  genres,
}: {
  goal: any;
  slug: string;
  score: any;
  genres: Array<any>;
}) {
  const [commentText, setCommentText] = useState('');
  const [resultMes, setResultMes] = useState('');
  const [messCss, setMessCss] = useState(' hidden');
  const [masterCode, setMasterCode] = useState('');
  const [editGoal, setEditGoal] = useState(goal);
  const [addPlayed, setAddPlayed] = useState(true);
  const labelControl = useAnimationControls();
  const router = useRouter();

  useEffect(() => {
    resultMes !== ''
      ? resultMes.includes('success')
        ? setMessCss(' text-green-600 ')
        : setMessCss(' text-red-600')
      : setMessCss(' hidden');
  }, [resultMes]);
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
          className={`h-7 w-12 p-1 rounded-lg bg-slate-400 hover:cursor-pointer flex flex-row  ${
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
          Edit Goal
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
      <motion.div
        variants={labelAnimate}
        animate={labelControl}
        className='mb-2'
      >
        {addPlayed ? 'Enter Comment:' : 'Enter Goal:'}
      </motion.div>
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
            onChange={(e) => setEditGoal(e.target.value)}
            className=' bg-neutral-800 border border-slate-400 text-slate-400 p-3'
            spellCheck='true'
            value={editGoal}
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
        className='mt-4 rounded-lg bg-pink-500 text-white  font-semibold  hover:cursor-pointer hover:bg-pink-600 hover:scale-105 w-fit p-2'
        onClick={(e) => removeFromBackLog(slug, masterCode, router)}
      >
        Delete From Back-Log
      </div>
      <div
        className='mt-4 rounded-lg p-2 bg-pink-700 font-semibold text-white w-fit hover:cursor-pointer'
        onClick={(e) => {
          addPlayed
            ? addToPlayed(
                slug,
                score,
                commentText,
                genres,
                setResultMes,
                masterCode
              )
            : editBacklog(slug, editGoal, setResultMes, masterCode);
        }}
      >
        Submit
      </div>
    </div>
  );
}
