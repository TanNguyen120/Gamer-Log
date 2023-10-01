import GenresCard from '@/component/genresCard';
import PlatformCard from '@/component/platFormCard';
import TileHeader from '@/component/tile';
import axios from 'axios';

async function getGenreList() {
  try {
    const pageSize = (
      await axios.get(
        `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
      )
    ).data.count;
    const listData = await axios.get(
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&page_size=${pageSize}`
    );
    return listData.data;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

export default async function GenresSection() {
  const genresList = await getGenreList();
  return (
    <div className='grid grid-cols-1 gap-2 pt-4'>
      <TileHeader tile='Genres' />
      <br></br>
      <div className=' grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5'>
        {genresList.results.map((e: any, i: number) => (
          <GenresCard genresData={e} key={i} />
        ))}
      </div>
    </div>
  );
}
