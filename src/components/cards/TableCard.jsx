import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";


const TableCard = () => {
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

  return (
    <div className="w-[90%] border bg-white rounded-[12px]">
      <div className="px-8 py-6 text-[20px] font-semibold flex gap-5 items-center">
        <h1 className="text-left">In Progress</h1>
        <div className="bg-[#FECDCA] bg-opacity-50 border-[#FECDCA] border-2 text-[16px] rounded-full text-primary py-1 px-3">
          <p>2 Orders</p>
        </div>
      </div>
      <table className="w-full">
        <thead className="">
          <tr className="bg-secondary bg-opacity-5 py-4 h-[70px] text-[18px] flex justify-between items-center px-[3%]">
            <th className="font-medium text-secondary">ID</th>
            <th className="font-medium text-secondary">Services</th>
            <th className="font-medium text-secondary">Date</th>
            <th className="font-medium text-secondary">Quantity</th>
            <th className="font-medium text-secondary">Cost</th>
            <th className="font-medium text-secondary">Status</th>
            <th className="font-medium text-secondary">Progress</th>
            <th className="font-medium text-secondary">Link</th>
          </tr>
        </thead>
        <tbody className="">
          {tableData.map((row, index) => (
            <tr
              key={row.ID}
              className="h-[90px] border-y-2 w- flex justify-between items-center pl-[3%] pr-[5%] text-[12px]"
            >
              <td className="">{row.ID}</td>
              <td className="flex flex-col justify-start items-start">
                {row.Services} <span>Nigerian Followers</span>
              </td>
              <td className="flex flex-col justify-start items-start">
                {row.Date}
                <span>13:04:46</span>
              </td>
              <td>{row.Quantity}</td>
              <td>{row.Cost}</td>
              <td className="text-primary bg-primary bg-opacity-5 border-[#FEDF89] border flex gap-2 justify-center items-center px-3 rounded-full py-1">
                <LuClock4/>
                {row.Status}
              </td>
              <td>{row.Progress}</td>
              <td>{row.Link}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-between items-center px-[3%] py-5">
        <button className="flex gap-3 justify-center items-center border-2 shadow-sm px-3 font-semibold rounded-[8px] py-1">
          <FaArrowLeft />
          Previous
        </button>
        <div className="flex gap-6 font-semibold justify-center items-center cursor-pointer">
          <p className="bg-secondary bg-opacity-5 px-4 py-2 rounded-[8px]">1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
        <button className="flex gap-3 justify-center items-center border-2 shadow-sm px-3 font-semibold rounded-[8px] py-1">
          <FaArrowRight />
          Next
        </button>
      </div>
    </div>
  );
};

export default TableCard;
