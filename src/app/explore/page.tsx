import GenresSection from './genresSection';
import PlatformSection from './platFormsection';

export default function Explore() {
  return (
    <div className='bg-black min-h-screen'>
      <div className='mx-auto w-2/3  grid grid-cols-1 text-white justify-center gap-4 divide-y divide-slate-300'>
        <PlatformSection />
        <GenresSection />
      </div>
    </div>
  );
}
