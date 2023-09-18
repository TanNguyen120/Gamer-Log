export default function RequirementSection({
  requirement,
  platformName,
}: {
  requirement: any;
  platformName: string;
}) {
  return (
    <div className=' flex flex-col text-slate-200 text-base px-5 py-3'>
      <div className=' text-xl font-semibold '>{platformName}</div>
      <div className=' grid grid-cols-2'>
        <div className=' flex flex-col'>
          <div className='text-slate-400 font-medium'>Minimum</div>
          <div className='text-slate-500 p-4'>
            {requirement.minimum ? requirement.minimum : 'No Data'}
          </div>
        </div>
        <div className=' flex flex-col'>
          <div className=' text-slate-400 font-medium'>Recommended</div>
          <div className=' text-slate-500 p-4'>
            {requirement.recommended ? requirement.recommended : 'No Data'}
          </div>
        </div>
      </div>
    </div>
  );
}
