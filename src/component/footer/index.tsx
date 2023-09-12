import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className=' h-60 text-center bg-black  text-slate-300 pt-20 grid grid-cols-1  bottom-0 border-t border-slate-700'>
      <div className='text-md'>a web by Tan Nguyen</div>
      <Link href='https://github.com/TanNguyen120' className='mx-auto text-xl'>
        <AiFillGithub />
      </Link>
    </div>
  );
}
