import BackLogSection from '@/component/backlogListSection';
import GameListSection from '@/component/gameListSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between md:p-3 lg:p-24 bg-neutral-900 text-white'>
      <div className='m-2 lg:container md:mx-10 lg:px-10 mx-5 flex flex-col'>
        <GameListSection />
        <br />
        <BackLogSection />
      </div>
    </main>
  );
}
