import axios from 'axios';

async function getData(platformName: string) {
  try {
    const resData = await axios.get(
      `https://api.rawg.io/api/platforms/${platformName}?key=${process.env.API_KEY}`
    );

    return resData.data;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

export default async function Platforms({
  params,
}: {
  params: { platformName: string };
}) {
  const platformData = await getData(params.platformName);
  return <div>{JSON.stringify(platformData)}</div>;
}
