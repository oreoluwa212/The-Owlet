import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import HomeSearchInputWhite from "../components/input/HomeSearchInput";
import HomeFilters from "../components/buttons/HomeFilters";
import FilterBtn from "../components/buttons/FilterBtn";
import TableCard from "../components/cards/TableCard";

  const tableData = [
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
  
const OrderPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const countOrders = () => tableData.length;

  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-bg h-screen">
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
          <div className="w-full px-[5%]">
            <div className="flex justify-between w-full gap-4 pt-4">
              <div className="flex gap-3">
                <HomeFilters name="In Progress" />
                <HomeFilters name="All Platforms" />
                <FilterBtn name="More Filters" />
              </div>
              <HomeSearchInputWhite />
            </div>
            <div className="hidden w-full lgss:flex  items-center pt-8">
              <TableCard
                heading="Orders"
                columns={columns}
                tableData={tableData}
                numberOfOrders={countOrders()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
