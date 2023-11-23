import axios from 'axios';

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

export default async function BacklogCard({
  name,
  goal,
}: {
  name: string;
  goal: string;
}) {
  const apiData = await getData(name);
  return <></>;
}
