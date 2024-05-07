import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { carton, logo, medal, purse } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import HomeCard from "../components/cards/HomeCard";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-[#F9FAFB]">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lgss:hidden w-full px-[5%] flex justify-between items-center border-b-[1px] py-5">
        <img src={logo} alt="the-owulet logo" />
        <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
          <LuBell />
          <LuMenu onClick={() => setIsOpen(true)} />
        </div>
      </div>
      <div className="w-full lgss:w-4/5 hidden lgss:flex flex-col h-full">
        <HomeSearch />
        <div className="flex flex-wrap w-full justify-between pt-12 px-[5%]">
          <HomeCard title="Available Balance"
          value={"#123,583"}
          img={purse}/>
          <HomeCard title="Total Orders"
          value={"323"}
          img={carton}/>
          <HomeCard title="Total Orders"
          value={"Tier 3"}
          img={medal}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
