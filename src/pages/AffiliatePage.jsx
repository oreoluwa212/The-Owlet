import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { MdCopyAll } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiWallet } from "react-icons/pi";
import { BsFunnel } from "react-icons/bs";
import { logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import ReferralTopCard from "../components/cards/ReferralTopCard";
import CommonH1 from "../components/CommonH1";
import CreateOrderBtn from "../components/buttons/CreateOrderBtn";
import ReferralBottomCard from "../components/cards/ReferralBottonCard";
import QuickLinks from "../components/cards/QuickLinks";

const AffiliatePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-bg">
      <div className="w-[20%]">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex flex-col lgss:w-[80%] z-0">
        <div className="lgss:hidden w-full px-[5%] flex justify-between items-center border-b-[1px] py-5">
          <img src={logo} alt="the-owulet logo" />
          <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
            <LuBell />
            <LuMenu onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <div className="w-full lgss:flex flex-col h-full">
          <HomeSearch />
          <div className="w-full px-[5%] pt-5">
            <div className="lgss:bg-white lgss:border lgss:shadow-sm lgss:py-4 rounded-[12px]">
              <CommonH1 title="Your referral stats" />
              <div className="flex flex-wrap w-full px-6 py-6 gap-6">
                <ReferralTopCard icon={GoPeople} title="Visitors" value="0" />
                <ReferralTopCard
                  icon={AiOutlineUsergroupAdd}
                  title="Registrations"
                  value="0"
                />
                <ReferralTopCard
                  icon={BsFunnel}
                  title="Conversion rate"
                  value="0.00%"
                />
                <ReferralTopCard
                  icon={PiWallet}
                  title="Available Earnings"
                  value="#0.00"
                />
                <ReferralTopCard
                  icon={PiWallet}
                  title="Total Earnings"
                  value="#0.00"
                />
              </div>
            </div>
            <div className="flex lgss:flex-row flex-col gap-5 pt-7 mb-12 w-full">
              <div className="lgss:bg-white lgss:border lgss:shadow-sm pt-4 rounded-[12px] h-fit lgss:w-[65%]">
                <CommonH1 title="Share your referral link" />
                <div className="flex flex-col text-left px-[3%] py-6">
                  <div className="flex w-full gap-6">
                    <input
                      className="w-[70%] rounded-[4px] placeholder:text-[.8rem] lgss:placeholder:text-[1rem] outline-none px-2 border"
                      type="text"
                      placeholder="https://the-owlet.com/ref/cpmb5	"
                    />
                    <div className="w-[30%]">
                      <CreateOrderBtn icon={MdCopyAll} title="Copy link" />
                    </div>
                  </div>
                  <div className="border-t mt-8 py-3">
                    <h1 className="text-[18px] font-bold">How it works</h1>
                    <div className="flex lgss:flex-row flex-col gap-6 pt-7">
                      <ReferralBottomCard
                        number="1"
                        title="Send invite"
                        description="Send your referral link to friends and tell them how cool the-owlet.com is."
                      />
                      <ReferralBottomCard
                        number="2"
                        title="Sign up"
                        description="Let them sign up for our services using your referral link to get them"
                      />
                      <ReferralBottomCard
                        number="3"
                        title="Get your reward"
                        description="You get 3% of whatever deposit they make on their account."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border shadow-sm py-5 rounded-[12px] h-fit lgss:w-[35%]">
                <CommonH1 title="Watch this video to learn how to use your referral link to earn more money" />
                <QuickLinks/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePage;
