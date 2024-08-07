import React from "react";
import HeaderH1 from "../HeaderH1";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";

const TicketCards = ({ complainHead, user, complaint, time, ticketId }) => {
  const formattedTime = formatDistanceToNow(new Date(time), {
    addSuffix: true,
  });

  return (
    <div className="bg-white rounded-[16px] w-full h-fit flex flex-col gap-3 py-4 px-4 border-[1px]">
      <div className="flex w-full justify-between">
        <HeaderH1 title={complainHead} />
        <p className="text-[12px]">{time}</p>
      </div>
      <h2 className="text-[14px] text-[#667085]">
        <span className="font-semibold ">{user}:</span>
        {complaint}
      </h2>
      <div className="flex items-center gap-5 text-[#667085]">
        <div className="border-[1px] rounded-[16px] px-2 py-1">
          <p>#{ticketId}</p>
        </div>
        <p className="flex items-center gap-2">
          <MdOutlineChatBubbleOutline /> 2
        </p>
      </div>
    </div>
  );
};

export default TicketCards;
