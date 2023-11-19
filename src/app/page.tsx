import GameListSection from '@/component/gameListSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between md:p-3 lg:p-24 bg-neutral-900 text-white'>
      <div className=' lg:mx-auto m-2 lg:w-3/4 flex flex-col'>
        <GameListSection />
      </div>
    </main>
  );
}
