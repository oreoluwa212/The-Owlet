function ReferralTopCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-[#F2F4F7] shadow-sm rounded-[8px] h-[105px] w-full lgss:w-[18%] flex flex-col justify-center items-start pl-5">
      <div className="flex gap-3 items-center text-[1rem]">
        {Icon && <Icon />}
        <h3 className="text-secondary text-[1rem] font-semibold">{title}</h3>
      </div>
      <h1 className="text-left text-[1.2rem] font-bold">{value}</h1>
    </div>
  );
};

export default ReferralTopCard;
