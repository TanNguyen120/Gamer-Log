import GameListSection from '@/component/gameListSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-900 text-white'>
      <div className=' w-3/4 flex flex-col'>
        <GameListSection />
      </div>
    </main>
  );
}
