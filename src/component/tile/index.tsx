export default function TileHeader({ tile }: { tile: string }) {
  return (
    <div className=' flex flex-col  w-1/3 items-start mb-5'>
      <div className=' text-white font-semibold text-3xl text-center'>
        {tile}
      </div>
      <div className=' border-t w-3/4 border-slate-600'></div>
    </div>
  );
}
