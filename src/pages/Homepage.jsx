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

const Homepage = () => {
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
        <div className="w-full hidden lgss:flex flex-col">
          <HomeSearch />
          <div className="flex flex-wrap w-full justify-between pt-12 px-[5%]">
            <HomeCard
              title="Available Balance"
              value={"#123,583"}
              img={purse}
            />
            <HomeCard title="Total Orders" value={"323"} img={carton} />
            <HomeCard title="Total Orders" value={"Tier 3"} img={medal} />
          </div>
          <div className="w-full px-[5%] py-8 flex justify-between">
            <div className="flex gap-3">
              <HomeFilters name="In Progress" />
              <HomeFilters name="All Platforms" />
              <FilterBtn name="More Filters" />
            </div>
            <HomeSearchInputWhite />
          </div>
          <div className="w-full flex justify-center items-center py-2">
            <TableCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
