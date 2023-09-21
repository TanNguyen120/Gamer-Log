'use client';

import { sql } from '@vercel/postgres';
import axios from 'axios';
import { useState } from 'react';

async function addGameData(
  slug: string,
  score: any,
  comment: string,
  genres: Array<any>,
  setMes: Function
) {
  try {
    const gameBody = {
      slug: slug,
      score: score,
      comment: comment,
      genres: genres,
    };
    const res = await axios.post('http://localhost:3000/api/addGame', gameBody);

    setMes(JSON.stringify(res.data));
  } catch (error) {
    setMes('error: ' + JSON.stringify(error));
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
  return (
    <div className='flex flex-col pt-5'>
      <div>{resultMes}</div>
      <div>Enter Comment:</div>
      <textarea
        onChange={(e) => setCommentText(e.target.value)}
        className=' bg-neutral-800 border border-slate-400 text-slate-400 p-3'
        spellCheck='true'
      ></textarea>
      <div
        className='mt-4 rounded-lg p-2 bg-pink-700 font-semibold text-white w-fit hover:cursor-pointer'
        onClick={(e) =>
          addGameData(slug, score, commentText, genres, setResultMes)
        }
      >
        Submit
      </div>
    </div>
  );
}
