import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

async function getData(gameName: string) {
  try {
    // const headers = {
    //   'Content-Type': 'application/json',
    //   Authorization: process.env.API_KEY,
    // };
    const resData = await axios.get(
      `https://api.rawg.io/api/games/${gameName}?key=c89a0b30250d4a53984fe0dbcf32ce22`
    );
    return resData.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
}

export default async function Page({
  params,
}: {
  params: { gameName: string };
}) {
  const apiData = await getData(params.gameName);
  return (
    <div className=' bg-slate-700 text-white'>
      <div className=' w-3/4 flex flex-col'>{JSON.stringify(apiData)}</div>
    </div>
  );
}
// export default function GameDetailsPage() {
//   const router = useRouter();
//   const [apiData, setApiData] = useState(null);
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         // const headers = {
//         //   'Content-Type': 'application/json',
//         //   Authorization: process.env.API_KEY,
//         // };
//         const resData = await axios.get(
//           `https://api.rawg.io/api/games/${router.query.gameName}?key=c89a0b30250d4a53984fe0dbcf32ce22`
//         );
//         setApiData(resData.data);
//       } catch (error) {
//         alert(JSON.stringify(error));
//       }
//     };
//     getData();
//   }, [router.query.gameName]);
//   return (
//     <div className=' bg-slate-700'>
//       <div className=' w-3/4 flex flex-col'>{JSON.stringify(apiData)}</div>
//     </div>
//   );
// }
