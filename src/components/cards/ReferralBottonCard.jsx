function ReferralBottomCard({ title, number, description }) {
  return (
    <div className="bg-[#FEE4E2] bg-opacity-50 text-primary shadow-sm rounded-[8px] py-6 lgss:w-1/3 flex flex-col justify-start text-left items-start px-6 gap-3">
      <div className="px-3 rounded-full py-1 bg-[#FEE4E2] text-[18px] font-bold">{number}</div>
      <h3 className='font-bold text-[18px]'>{title}</h3>

      <h1 className="text-left ">{description}</h1>
    </div>
  );
}

export default ReferralBottomCard;
