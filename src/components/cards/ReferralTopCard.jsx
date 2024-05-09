function ReferralTopCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-[#F2F4F7] shadow-sm rounded-[8px] h-[105px] w-[20%] flex flex-col justify-center items-start pl-5">
      <div className="flex gap-3 justify-center items-center text-[19px]">
        {Icon && <Icon />}
        <h3 className="text-secondary">{title}</h3>
      </div>
      <h1 className="text-left text-[26px] font-bold">{value}</h1>
    </div>
  );
};

export default ReferralTopCard;
