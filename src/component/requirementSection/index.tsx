export default function RequirementSection({
  requirement,
  platformName,
}: {
  requirement: any;
  platformName: string;
}) {
  return (
    <div className=' flex flex-col'>
      <div className=' text-xl font-semibold '>{platformName}</div>
      <div className=' grid grid-cols-2'>
        <div className=' flex flex-col'>
          <div className=' text-lg font-medium'>Minimum</div>
          <div>{requirement.minimum}</div>
        </div>
        {requirement.recommended && (
          <div className=' flex flex-col'>
            <div className=' text-lg font-medium'>Recommended</div>
            <div>{requirement.recommended}</div>
          </div>
        )}
      </div>
    </div>
  );
}
