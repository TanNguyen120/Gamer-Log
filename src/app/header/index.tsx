export default function Header() {
  return (
    <div className='flex flex-row'>
      <div className=' text-3xl font-semibold text-white font-mono'>
        T-BackLog
      </div>
      <div className=' text-slate-200 mr-3 ml-auto'>games</div>
      <div className=' px-2 py-1 bg-pink-400 text-white mr-3 ml-3'>
        log a game
      </div>
    </div>
  );
}
