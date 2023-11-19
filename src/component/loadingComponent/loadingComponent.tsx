import LoadingAnimation from './loadAnimation';

export default function LoadingPage() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='grid grid-cols-1 bg-black min-h-screen text-center p-8 text-slate-100 align-middle'>
      <div className='text-4xl '>Processing</div>
      <LoadingAnimation />
    </div>
  );
}
