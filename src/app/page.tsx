import Header from '@/component/header';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 text-white'>
      <div className=' w-3/4 flex flex-col'>
        <Header />
        <div className=' text-5xl'>hi hi</div>
      </div>
    </main>
  );
}
