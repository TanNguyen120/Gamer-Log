import axios from 'axios';
import CardContent from './cardContend';
import LoadingDiv from './loadingDiv';

const getData = async (gameName: string) => {
  try {
    // const headers = {
    //   'Content-Type': 'application/json',
    //   Authorization: process.env.API_KEY,
    // };
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${gameName}?key=${process.env.API_KEY}`
    );
    return resData.data;
  } catch (error) {
    alert(JSON.stringify(error));
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
