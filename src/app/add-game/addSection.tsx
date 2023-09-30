'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';

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
  useEffect(() => {
    resultMes !== ''
      ? resultMes.includes('success')
        ? setMessCss(' text-green-600 ')
        : setMessCss(' text-red-600')
      : setMessCss(' hidden');
  }, [resultMes]);
  return (
    <div className='flex flex-col pt-5'>
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
      <textarea
        onChange={(e) => setCommentText(e.target.value)}
        className=' bg-neutral-800 border border-slate-400 text-slate-400 p-3'
        spellCheck='true'
      ></textarea>
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
