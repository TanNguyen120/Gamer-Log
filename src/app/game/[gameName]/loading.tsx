export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='grid grid-cols-1 bg-neutral-900 min-h-screen text-center p-8 text-slate-100 align-middle'>
      <div className='text-4xl '>Processing</div>
      <iframe
        src='https://giphy.com/embed/RgzryV9nRCMHPVVXPV'
        width='480'
        height='480'
        frameBorder='0'
        className='giphy-embed'
        allowFullScreen
      ></iframe>
    </div>
  );
}
