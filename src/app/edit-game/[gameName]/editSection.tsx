'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';

async function editGameData(
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

    console.log('edit game: ' + gameBody.slug);
    const currentUrl = new URL(window.location.href);
    const url = currentUrl.origin;
    await axios
      .post(url + '/api/editGame', gameBody, {})
      .then(function (response) {
        console.log(response);
        setMes(response.data.mess);
      })
      .catch((err) => {
        console.log(err);
        setMes(JSON.stringify(err));
      });
    // fetch(`${severUrl}api/editGame`, {
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    //   body: JSON.stringify(gameBody),
    // })
    //   .then(function (res) {
    //     console.log(res);
    //     setMes(JSON.stringify(res));
    //   })
    //   .catch(function (res) {
    //     console.log(res);
    //     setMes(JSON.stringify(res));
    //   });
  } catch (error: any) {
    console.error('error:' + JSON.stringify(error));
    setMes('error: ' + JSON.stringify(error));
  }
}

export default function EditSection({
  myComment,
  slug,
  score,
  genres,
  severUrl,
}: {
  myComment: string;
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
      <div>Edit Comment:</div>
      <textarea
        onChange={(e) => setCommentText(e.target.value)}
        className=' bg-neutral-800 border border-slate-400 text-slate-400 p-3'
        spellCheck='true'
        readOnly={false}
        defaultValue={myComment}
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
          editGameData(
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
