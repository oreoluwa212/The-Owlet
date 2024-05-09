import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiWallet } from "react-icons/pi";
import { BsFunnel } from "react-icons/bs";
import { logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import ReferralTopCard from "../components/cards/ReferralTopCard";

const AffiliatePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full flex h-screen flex-col lgss:flex-row bg-bg">
      <div className="w-[20%]">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex flex-col w-[80%] z-0">
        <div className="lgss:hidden w-full px-[5%] flex justify-between items-center border-b-[1px] py-5">
          <img src={logo} alt="the-owulet logo" />
          <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
            <LuBell />
            <LuMenu onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <div className="w-full hidden lgss:flex flex-col h-full">
          <HomeSearch />
          <div className="w-full px-[5%] pt-5">
            <div className="bg-white border shadow-sm py-4 rounded-[12px]">
              <div className="w-full border-b-2 px-5 py-3 flex flex-col justify-start items-start">
                <h1 className="text-[22px] font-semibold">
                  Your referral stats
                </h1>
              </div>
              <div className="flex w-full px-6 py-6 gap-6">
                <ReferralTopCard icon={GoPeople} title="Visitors" value="0" />
                <ReferralTopCard
                  icon={AiOutlineUsergroupAdd}
                  title="Registrations"
                  value="0"
                />
                <ReferralTopCard icon={BsFunnel} title="Conversion rate" value="0.00%" />
                <ReferralTopCard icon={PiWallet} title="Available Earnings" value="#0.00" />
                <ReferralTopCard icon={PiWallet} title="Total Earnings" value="#0.00" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePage;
