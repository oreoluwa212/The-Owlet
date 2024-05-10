import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { carton, logo, medal, purse } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import HomeCard from "../components/cards/HomeCard";
import TableCard from "../components/cards/TableCard";
import HomeSearchInputWhite from "../components/input/HomeSearchInput";
import HomeFilters from "../components/buttons/HomeFilters";
import FilterBtn from "../components/buttons/FilterBtn";
import HomeCardMobile from "../components/cards/HomeCardMobile";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full flex flex-col lgss:flex-row ">
      <div className="w-[20%]">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex flex-col lgss:w-[80%] z-0">
        <div className="lgss:hidden w-full px-[5%] flex justify-between items-center border-b-[1px] py-5 bg-white">
          <img src={logo} alt="the-owulet logo" />
          <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
            <LuBell />
            <LuMenu onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <div className="w-full lgss:flex flex-col bg-bg">
          <HomeSearch />
          <div className="flex flex-row flex-wrap w-full gap-4 justify-between pt-12 px-[5%]">
            <HomeCard
              title="Available Balance"
              value={"#123,583"}
              img={purse}
            />
            <HomeCard title="Total Orders" value={"323"} img={carton} />
            <HomeCard title="Total Orders" value={"Tier 3"} img={medal} />
          </div>
          <div className="w-full px-[5%] py-8 hidden lgss:flex justify-between">
            <div className="flex gap-3">
              <HomeFilters name="In Progress" />
              <HomeFilters name="All Platforms" />
              <FilterBtn name="More Filters" />
            </div>
            <HomeSearchInputWhite />
          </div>
          <div className="hidden w-full lgss:flex justify-center items-center py-2">
            <TableCard />
          </div>
          <div className="lgss:hidden flex flex-col gap-5 text-left px-[5%] py-6">
            <h1 className="uppercase font-semibold text-secondary">orders in progress</h1>
            <HomeCardMobile title="Instagram Nigerian Followers"
            value={"80%"}/>
            <HomeCardMobile title="Facebook Nigerian Followers"
            value={"80%"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
