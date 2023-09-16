import TileHeader from '@/component/tile';
import axios from 'axios';

async function getPlatformList() {
  try {
    const listData = await axios.get(
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`
    );
    return listData.data;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

export default async function PlatformSection() {
  const platformList = await getPlatformList();
  return (
    <div className='grid grid-cols-1 gap-2'>
      <TileHeader tile='Platforms' />
      <br></br>
      <ul className='gap-2'>
        {platformList.results.map((e: any, i: number) => (
          <li key={i}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}
