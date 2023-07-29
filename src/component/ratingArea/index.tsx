import { AiFillStar } from 'react-icons/ai';

export default function RatingArea({
  id,
  title,
  count,
}: {
  id: number;
  title: string;
  count: number;
}) {
  const startCount = (id: number) => {
    let content = [];
    for (let i = 0; i < id; i++) {
      content.push(<AiFillStar className='inline' key={id} />);
    }
    return content;
  };
  return (
    <div className=' flex flex-row my-1 items-baseline text-slate-300'>
      {startCount(id)} <span className=' mx-2'>{title}:</span>{' '}
      <span>{count}</span>
    </div>
  );
}
