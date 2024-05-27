import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import SearchPlatforms from "../components/modals/creatingOrder/SearchPlatforms";
import TableCard from "../components/cards/TableCard";
import HomeCardMobile from "../components/cards/HomeCardMobile";
import FilterBtn from "../components/buttons/FilterBtn";
import HomeFilters from "../components/buttons/HomeFilters";
import HomeSearchInputWhite from "../components/input/HomeSearchInput";
import { CiCircleInfo } from "react-icons/ci";

const tableData = [
  {
    ID: "Instagram Followers (Nigeria)",
    Method: "10",
    Cost: "500,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Blue Tick Verified Followers",
    Method: "5,000",
    Cost: "5,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (Australia)",
    Method: "10,000",
    Cost: "10,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (South Africa)",
    Method: "5,000",
    Cost: "5,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (Brazil)",
    Method: "10,000",
    Cost: "10,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (China)",
    Method: "10,000",
    Cost: "5,000",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (USA)",
    Method: "5,000",
    Cost: "#50,000.00",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
  {
    ID: "Instagram Followers (Sweden)",
    Method: "10",
    Cost: "#50,000.00",
    Date: "₦ 1,500.00",
    icon: <CiCircleInfo />,
  },
];

const columns = [
  { label: "Services", key: "ID" },
  { label: "Minimum order", key: "Method" },
  { label: "Maximum order", key: "Cost" },
  { label: "Rate per 1,000", key: "Date" },
  { label: "Description", key: "icon" },
];

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-bg h-screen">
      <div className="w-[20%]">
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
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
        </div>
        <div>
          <div className="w-full px-[5%] py-5">
            <h1 className="text-[2rem] font-semibold">
              Instagram followers service list
            </h1>
            <h1 className="text-[1.2rem] font-normal text-secondary">
              Last updated Mar 15th 2024
            </h1>
            <div className="w-full py-8 hidden lgss:flex justify-between">
              <div className="flex gap-3">
                <HomeFilters name="In Progress" />
                <HomeFilters name="All Platforms" />
                <FilterBtn name="More Filters" />
              </div>
              <HomeSearchInputWhite />
            </div>
            <div className="hidden w-full lgss:flex justify-center items-center py-2">
              <TableCard
                heading="In Progress"
                columns={columns}
                tableData={tableData}
                numberOfOrders={tableData.length}
              />
            </div>
          </div>
          <div className="lgss:hidden flex flex-col gap-5 text-left py-6">
            <h1 className="uppercase font-semibold text-secondary">
              orders in progress
            </h1>
            <HomeCardMobile
              title="Instagram Nigerian Followers"
              value={"80%"}
            />
            <HomeCardMobile title="Facebook Nigerian Followers" value={"80%"} />
          </div>
        </div>
      </div>
      <SearchPlatforms
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default ServicesPage;
