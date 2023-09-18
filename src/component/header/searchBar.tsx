'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

export default function SearchComponent() {
  const router = useRouter();
  const [searchString, setSearchString] = useState('');
  useEffect(() => {
    console.log(searchString);
  }, [searchString]);

  return (
    <form
      className='max-w-sm px-4 py-6 on'
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?word=${searchString}`);
      }}
    >
      <div className='relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={() => router.push(`/search?word=${searchString}`)}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
        <input
          id='searchString'
          type='text'
          placeholder='Search'
          onChange={(e) => setSearchString(e.target.value)}
          className='w-full py-1 pl-12 pr-4 text-slate-100  rounded-md outline-none bg-slate-600 '
        />
      </div>
    </form>
  );
}
