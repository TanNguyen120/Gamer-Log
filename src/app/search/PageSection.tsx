import Link from 'next/link';
import { MdNavigateNext } from 'react-icons/md';
export default function PageSelection({
  nextPage,
  prePage,
  slug,
}: {
  nextPage: string | undefined;
  prePage: string | undefined;
  slug: string | string[];
}) {
  const nextPageParams = new URLSearchParams(nextPage); // Get all params in the link the api provide
  const nextPageNum = nextPageParams.get('page'); // get the page number
  console.log('next page is: ' + nextPageNum);
  //---------------------------------------------------------------------------------------------------
  const prevPageParams = new URLSearchParams(prePage); // Get all params in the link the api provide
  const prevPageNum = prevPageParams.get('page'); // get the page number
  console.log('prev page is: ' + prevPageNum);
  //---------------------------------------------------------------------------------------------------
  return (
    <div className=' flex flex-row gap-5 items-center justify-center mb-3'>
      {prePage ? (
        <Link
          href={`/searchPage?page=${prevPageNum}&slug=${slug}`}
          className=' rounded-lg bg-neutral-800 ring ring-slate-700 p-2'
        >
          <MdNavigateNext className='inline -rotate-180' /> Prev Page
        </Link>
      ) : (
        <div className=' hover:cursor-not-allowed rounded-lg bg-neutral-800'>
          <MdNavigateNext className='inline -rotate-180' /> Prev Page{' '}
        </div>
      )}

      {nextPage ? (
        <Link
          href={`/searchPage?page=${nextPageNum}&slug=${slug}`}
          className=' rounded-lg bg-neutral-800 ring ring-slate-700 p-2'
        >
          Next Page <MdNavigateNext className='inline' />
        </Link>
      ) : (
        <div className=' hover:cursor-not-allowed rounded-lg bg-neutral-800'>
          Next Page <MdNavigateNext className='inline' />
        </div>
      )}
    </div>
  );
}
