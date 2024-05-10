import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuInbox, LuMenu } from "react-icons/lu";
import { carton, homeEmptyIcon, logo, medal, purse } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import HomeCard from "../components/cards/HomeCard";
import TableCard from "../components/cards/TableCard";
import HomeSearchInputWhite from "../components/input/HomeSearchInput";
import HomeFilters from "../components/buttons/HomeFilters";
import FilterBtn from "../components/buttons/FilterBtn";
import HomeCardMobile from "../components/cards/HomeCardMobile";
import CreateOrderBtn from "../components/buttons/CreateOrderBtn";

const tableData = [
  {
    ID: "#53045701",
    Services: "Instagram",
    Date: "Jan 6 2022",
    Quantity: "10000",
    Cost: "#17,500.00",
    Status: "In progress",
    Progress: "60%",
    Link: "link",
  },
  {
    ID: "#53045701",
    Services: "Facebook",
    Date: "Jan 6 2022",
    Quantity: "10000",
    Cost: "#17,500.00",
    Status: "In progress",
    Progress: "60%",
    Link: "link",
  },
];

const columns = [
  { label: "ID", key: "ID" },
  { label: "Services", key: "Services" },
  { label: "Date", key: "Date" },
  { label: "Quantity", key: "Quantity" },
  { label: "Cost", key: "Cost" },
  { label: "Status", key: "Status" },
  { label: "Progress", key: "Progress" },
  { label: "Link", key: "Link" },
];

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const countOrders = () => tableData.length;
  const [activeTab, setActiveTab] = useState("empty");

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
          <div className="w-full flex flex-col px-[5%]">
            <div className="w-full flex lgss:flex-row flex-col gap-4 py-2">
              <div
                className={activeTab === "empty" ? "active" : ""}
                onClick={() => setActiveTab("empty")}
              >
                <CreateOrderBtn title="Empty Tab" />
              </div>
              <div
                className={activeTab === "active" ? "active" : ""}
                onClick={() => setActiveTab("active")}
              >
                <CreateOrderBtn title="Active Tab" />
              </div>
            </div>
            <div className="flex flex-row flex-wrap w-full gap-4 justify-between pt-12">
              <HomeCard
                title="Available Balance"
                value={"#123,583"}
                img={purse}
              />
              <HomeCard title="Total Orders" value={"323"} img={carton} />
              <HomeCard title="Total Orders" value={"Tier 3"} img={medal} />
            </div>
            {activeTab === "empty" ? (
              <div className="w-full flex flex-col justify-center items-center pt-6">
                <img src={homeEmptyIcon} alt="" />
                <div className="flex flex-col gap-3 font-semibold">
                  <h2 className="text-[1.2rem]">No orders yet</h2>
                  <div className="text-primary flex gap-3 justify-center items-center">
                    <span>
                      <LuInbox />
                    </span>
                    <p>Place your first order now</p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="w-full">
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
                      numberOfOrders={countOrders()}
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
                  <HomeCardMobile
                    title="Facebook Nigerian Followers"
                    value={"80%"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
