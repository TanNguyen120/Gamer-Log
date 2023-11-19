import axios from 'axios';
import CardContent from './cardContend';
import LoadingDiv from './loadingDiv';

const getData = async (gameName: string) => {
  try {
    // const headers = {
    //   'Content-Type': 'application/json',
    //   Authorization: process.env.API_KEY,
    // };
    const resData = await fetch(
      `https://api.rawg.io/api/games/${gameName}?key=${process.env.API_KEY}`,
      { cache: 'force-cache' }
    );
    const result = await resData.json();
    return result;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
};

export default async function GameCard({
  gameName,
  myComment,
}: {
  gameName: string;
  myComment: string;
  gameDetails: any;
  key: number;
}) {
  const apiData = await getData(gameName);
  return (
    <div className=' rounded-lg'>
      {apiData ? (
        <CardContent gameDetails={apiData} myRating={myComment} />
      ) : (
        <LoadingDiv />
      )}
    </div>
  );
}
