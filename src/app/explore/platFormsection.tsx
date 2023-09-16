import PlatformCard from '@/component/platFormCard';
import TileHeader from '@/component/tile';
import axios from 'axios';
import Link from 'next/link';

async function getPlatformList() {
  try {
    const pageSize = (
      await axios.get(
        `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`
      )
    ).data.count;
    const listData = await axios.get(
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&page_size=${pageSize}`
    );
    return listData.data;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

export default async function PlatformSection() {
  const platformList = await getPlatformList();
  return (
    <div className='grid grid-cols-1 gap-2 pt-2'>
      <TileHeader tile='Platforms' />
      <br></br>
      <div className=' grid grid-cols-3 gap-5'>
        {platformList.results.map((e: any, i: number) => (
          <PlatformCard platformData={e} key={i} />
        ))}
      </div>
    </div>
  );
}
