function ReferralTopCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-[#F2F4F7] shadow-sm rounded-[8px] h-[105px] w-full lgss:w-[20%] flex flex-col justify-center items-start pl-5">
      <div className="flex gap-2 items-center text-[.9rem]">
        {Icon && <Icon />}
        <h3 className="text-secondary text-[.9rem] font-semibold">{title}</h3>
      </div>
      <h1 className="text-left text-[1.4rem] font-bold">{value}</h1>
    </div>
  );
};

export default ReferralTopCard;
