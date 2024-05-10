import { CiCircleInfo } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";

function HomeCardMobile({ title, value }) {
  return (
    <div className="bg-white shadow-sm border-[1px] rounded-[8px] h-[150px] w-full flex justify-between items-center px-6 text-[1.3rem]">
      <div className="flex flex-col gap-6">
        <h3 className="flex gap-3 justify-center items-center text-secondary text-[1rem]">
          {title}
        </h3>
        <div className="flex gap-4">
          <div className="text-primary bg-primary text-[.9rem] bg-opacity-5 border-[#FEDF89] border flex gap-2 justify-center items-center px-3 rounded-full py-1">
            <LuClock4 />
            <p>In Progress</p>
          </div>
          <h1 className="text-left text-[1rem] ">{value}</h1>
        </div>
      </div>
      <CiCircleInfo />
    </div>
  );
}

export default HomeCardMobile;
