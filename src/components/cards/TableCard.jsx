import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";


const TableCard = ({ heading, columns, tableData, numberOfOrders }) => {
  return (
    <div className="w-full border bg-white rounded-[12px]">
      <div className="px-8 py-6 text-[20px] font-semibold flex gap-5 items-center">
        <h1 className="text-left">{heading}</h1>
        <div className="bg-[#FECDCA] bg-opacity-50 border-[#FECDCA] border-2 text-[16px] rounded-full text-primary py-1 px-3">
          <p>{numberOfOrders} Orders</p>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-secondary bg-opacity-5 py-4 lgss:h-[73px] text-[18px] flex justify-between items-start text-left px-[5%] w-full">
            {columns.map((column, index) => (
              <th
                key={index}
                className="font-semibold text-[1rem] w-1/7 text-secondary"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="lgss:h-[90px] border-y-2 flex justify-start w-full items-center lgss:text-[.9rem] text-[.6rem] py-3 font-semibold"
            >
              {columns.map((column, colIndex) => (
                <td className="w-1/5" key={colIndex}>
                  {row[column.key]}
                </td>
              ))}
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
