'use client';
import { FaRandom } from 'react-icons/fa';

export default function ReloadBtn() {
  return (
    <button
      className=' mr-2 ml-auto px-2 py-1 bg-pink-600 text-white  font-semibold rounded-md mt-2'
      onClick={(e) => window.location.reload()}
    >
      <FaRandom className='inline' /> Reload
    </button>
  );
}
