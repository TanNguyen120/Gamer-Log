export function GameCount({ gamesNumber }: { gamesNumber: number }) {
  console.log('game played: ' + gamesNumber);
  return <>{gamesNumber}</>;
}
