import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { book, cashenvoy, cryptomus, flutter, korapay, logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import { FaAngleDown } from "react-icons/fa6";
import PaymentBtns from "../components/buttons/PaymentBtns";
import Btn from "../components/buttons/Btn";
import CommonH1 from "../components/CommonH1";
import CreateOrderBtn from "../components/buttons/CreateOrderBtn";
import FundHistoryTable from "../components/tables/FundHistoryTable";

  const tableData = [
    {
      ID: "#53007613",
      Method: "Cryptomus",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53007613",
      Method: "Cryptomus",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53007613",
      Method: "Korapay",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53007613",
      Method: "Cryptomus",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53007613",
      Method: "Korapay",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53007613",
      Method: "Cryptomus",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53045701",
      Method: "Flutterwave",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53045701",
      Method: "Flutterwave",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53007613",
      Method: "Korapay",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53007613",
      Method: "Cryptomus",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
    {
      ID: "#53045701",
      Method: "Flutterwave",
      Cost: "#50,000.00",
      Date: "Jan 6,2022",
    },
  ];
  const columns = [
    { label: "ID", key: "ID" },
    { label: "Method", key: "Method" },
    { label: "Cost", key: "Cost" },
    { label: "Date", key: "Date" },
  ];

const FundPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("empty");

  return (
    <div className="w-full flex flex-col lgss:flex-row bg-bg">
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
        <div className="w-full lgss:flex flex-col">
          <HomeSearch />
          <div className="w-full flex lgss:flex-row flex-col gap-4 py-2 px-[5%]">
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
          <div className="flex lgss:flex-row flex-col gap-5 w-full h-full justify-between lgss:py-12 px-[5%]">
            <div className="lgss:bg-white lgss:w-[55%] lgss:border shaow-md py-6 rounded-[12px] flex flex-col justify-start items-start text-left">
              <CommonH1
                title="Fund your account
"
              />
              <div className="w-full flex flex-col px-[5%] pt-5">
                <h1 className="text-[1rem] lgss:text-[1.3rem] font-medium text-secondary">
                  Amount
                </h1>
                <div className="relative w-full">
                  <input
                    type="text"
                    className="px-3 py-4 border-2 mt-2 w-full rounded-[8px] text-black outline-none"
                    placeholder="# 1,000"
                  />
                  <div className="absolute inset-y-0 right-0 px-3 flex gap-2 items-center pointer-events-none text-black text-[1rem]">
                    <p>NGN</p>
                    <FaAngleDown />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col px-[5%] pt-5">
                <h1 className="text-[1rem] lgss:text-[1.3rem] font-medium text-secondary">
                  Select payment method
                </h1>
                <div className="flex-col gap-2">
                  <div className="flex justify-between gap-4 pt-4 items-center w-full">
                    <PaymentBtns img={flutter} />
                    <PaymentBtns img={cryptomus} />
                  </div>
                  <div className="flex justify-between gap-4 pt-4 items-center w-full">
                    <PaymentBtns img={korapay} />
                    <PaymentBtns img={cashenvoy} />
                  </div>
                </div>
              </div>
              <div className="w-[90%] mx-auto flex flex-col px-[5%] mt-6 bg-[#EAECF0] bg-opacity-50 py-3 rounded-[8px] text-secondary font-semibold text-[.8rem] lgss:text-[1.1rem]">
                <div className="pb-3 pt-5 border-b-[1px] mb-2">
                  <h1 className="font-semibold text-[22px] text-black">
                    CASHBACK DETAILS
                  </h1>
                </div>
                <p>8% Cashback on all Payments from 6am - 11pm</p>
                <p>20% Hootback on all Payments from 11pm - 5:59am</p>
              </div>

              <div className="w-[90%] mx-auto flex flex-col px-[5%] mt-6 bg-[#FEDF89] bg-opacity-30 py-3 rounded-[8px] font-semibold text-[.9rem] lgss:text-[1.2rem] text-primary">
                <h1 className="font-semibold py-3">IMPORTANT</h1>
                <ul className="list-disc px-[5%] border-t-2 border-[#FEDF89] py-4 flex flex-col gap-4">
                  <li>
                    Pay exactly the amount you have imputed to pay, do not pay
                    lesser or higher than the amount you have placed.
                  </li>
                  <li>
                    To avoid your account being flagged or suspended, make sure
                    you are paying with your own bank or ATM card except if you
                    are using POS payment (do not pay with different banks, make
                    sure you are using the same bank you have been using to pay)
                  </li>
                </ul>
                <p>
                  Payments are updated instantly but in some cases where it is
                  taking too much time to update, kindly wait for 1-3hours, it
                  will be updated, if after 5hours and it has not been
                  completed, kindly send a mail to payment@theowlette.com
                </p>
              </div>

              <div className="w-full px-[5%] pt-4">
                <Btn />
              </div>
            </div>
            {activeTab === "empty" ? (
              <div className="bg-white lgss:w-[45%] w-[90%] mx-auto border shaow-md py-5 rounded-[12px] h-[420px] flex flex-col ">
                <div className="w-full border-b-2 px-5 pb-1 flex items-center justify-between text-[18px] ">
                  <h1 className="font-bold">Funding history</h1>
                  <PiDotsThreeOutlineVerticalBold />
                </div>
                <div className="flex justify-center items-center w-full flex-col font-semibold text-[26px]">
                  <img className="h-[250px]" src={book} alt="" />
                  <h2>No funding history</h2>
                </div>
              </div>
            ) : (
              <div className="lgss:w-[55%] bg-white border">
                <div className="w-full border-b-2 px-5 py-7 flex items-center justify-between text-[18px]">
                  <h1 className="font-bold">Funding history</h1>
                  <PiDotsThreeOutlineVerticalBold />
                </div>
                <FundHistoryTable columns={columns} tableData={tableData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundPage;
