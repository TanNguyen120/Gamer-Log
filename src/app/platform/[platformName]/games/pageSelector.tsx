import { MdNavigateNext } from 'react-icons/md';
export default function PageSelector({
  platFormDetail,
  setCurrentPage,
}: {
  platFormDetail: any;
  setCurrentPage: Function;
}) {
  const nextPageParams = new URLSearchParams(platFormDetail.next); // Get all params in the button the api provide
  const nextPageNum = nextPageParams.get('page'); // get the page number
  console.log('next page is: ' + nextPageNum);
  //---------------------------------------------------------------------------------------------------
  const prevPageParams = new URLSearchParams(platFormDetail.previous); // Get all params in the button the api provide
  const prevPageNum = prevPageParams.get('page')
    ? prevPageParams.get('page')
    : 1; // get the page number

  console.log('prev page is: ' + prevPageNum);
  //---------------------------------------------------------------------------------------------------
  return (
    <div className=' flex flex-row gap-5 items-center justify-center mb-3'>
      {platFormDetail.previous ? (
        <button
          onClick={(e) => setCurrentPage(prevPageNum)}
          className=' rounded-lg bg-neutral-800 ring ring-slate-700 p-2'
        >
          <MdNavigateNext className='inline -rotate-180' /> Prev Page
        </button>
      ) : (
        <div className=' hover:cursor-not-allowed rounded-lg bg-neutral-800'>
          <MdNavigateNext className='inline -rotate-180' /> Prev Page{' '}
        </div>
      )}

      {platFormDetail.next ? (
        <button
          onClick={(e) => setCurrentPage(nextPageNum)}
          className=' rounded-lg bg-neutral-800 ring ring-slate-700 p-2'
        >
          Next Page <MdNavigateNext className='inline' />
        </button>
      ) : (
        <div className=' hover:cursor-not-allowed rounded-lg bg-neutral-800'>
          Next Page <MdNavigateNext className='inline' />
        </div>
      )}
    </div>
  );
}
