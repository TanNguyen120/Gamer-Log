import GameCard from './gameCard';

export default function GameListSection() {
  return (
    <div className=' flex flex-col'>
      <div className=' flex flex-row text-slate-300 mt-2'>
        <div className=' mx-2 mb-2'>Games Played:</div>
        <div>5</div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        <GameCard gameName='total-war-warhammer-ii' />
        <GameCard gameName='total-war-warhammer' />
        <GameCard gameName='rimworld' />
        <GameCard gameName='the-elder-scrolls-v-skyrim' />
        <GameCard gameName='factorio' />
      </div>
    </div>
  );
}
