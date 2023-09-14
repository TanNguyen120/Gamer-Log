import TileHeader from '@/component/tile';
import axios from 'axios';

async function GetPlatformList() {
  const listData = await axios.get('');
}

export default async function PlatformSection() {
  return (
    <div className='grid grid-cols-1'>
      <TileHeader tile='Platforms' />
      <br></br>
    </div>
  );
}
