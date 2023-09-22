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
  severUrl: string
) {
  try {
    const gameBody = {
      slug: slug,
      score: score,
      comment: comment,
      genres: genres,
    };

    const res = await axios.post(`${severUrl}api/addGame`, gameBody);
    setMes(res.data.mess);
  } catch (error: any) {
    setMes('error: ' + error.message);
  }
}

export default function AddSection({
  slug,
  score,
  genres,
  severUrl,
}: {
  slug: string;
  score: any;
  genres: Array<any>;
  severUrl: any;
}) {
  const [commentText, setCommentText] = useState('');
  const [resultMes, setResultMes] = useState('');
  const [messCss, setMessCss] = useState(' hidden');
  const [masterCode, setMasterCode] = useState('');
  useEffect(() => {
    resultMes && resultMes.includes('success')
      ? setMessCss(' text-green-600 ')
      : setMessCss(' text-red-600');
  }, [resultMes]);
  return (
    <div className='flex flex-col pt-5'>
      <div className={' font-semibold p-2 flex flex-row' + messCss}>
        <div className={messCss}>
          {resultMes.includes('success') ? (
            <AiOutlineCheckCircle />
          ) : (
            <AiOutlineWarning />
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
      <div
        className='mt-4 rounded-lg p-2 bg-pink-700 font-semibold text-white w-fit hover:cursor-pointer'
        onClick={(e) =>
          addGameData(slug, score, commentText, genres, setResultMes, severUrl)
        }
      >
        Submit
      </div>
    </div>
  );
}
