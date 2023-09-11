import Image from 'next/image';
import TileHeader from '../tile';
import { Suspense } from 'react';

export default function ScreenShotSection({
  screenShots,
}: {
  screenShots: any;
}) {
  return (
    <div className=' grid grid-col-1 my-1 text-slate-300 gap-4'>
      <TileHeader tile='Screen Shot' />
      {screenShots.map((e: any, i: number) => (
        <div key={i}>
          <Suspense fallback={<p>Loading image...</p>}>
            <Image
              src={e.image}
              width={1280}
              height={720}
              alt={'id'}
              className=' rounded-t-lg '
            />
          </Suspense>
        </div>
      ))}
    </div>
  );
}
