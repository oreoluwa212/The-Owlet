import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";

function HomeCardMobile({ title, value }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "Canceled":
        return "text-red-500";
      case "Processing":
        return "text-yellow-500";
      default:
        return "text-primary";
    }
  };

  return (
    <div className="bg-white shadow-sm border-[1px] rounded-[8px] h-[110px] w-full flex flex-col justify-between items-center px-6 pt-4 text-[1.3rem]">
      <div className="flex flex-col gap-4 w-full">
        <h3 className="font-semibold text-[1rem]">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <LuClock4
              className={`text-primary bg-primary bg-opacity-5 border-[#FEDF89] border rounded-full px-3 py-1 ${getStatusStyle(
                value
              )}`}
            />
            <p className={`text-[.9rem] ${getStatusStyle(value)}`}>{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCardMobile;
