import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const TableHome = ({ heading, columns, tableData, numberOfOrders }) => {
  return (
    <div className="w-full border bg-white rounded-[12px]">
      <div className="px-8 py-6 text-[20px] font-semibold flex gap-5 items-center">
        <h1 className="text-left">{heading}</h1>
        <div className="bg-[#FECDCA] bg-opacity-50 border-[#FECDCA] border-2 text-[16px] rounded-full text-primary py-1 px-3">
          <p>{numberOfOrders} Orders</p>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-8 bg-secondary bg-opacity-5 py-4 text-[18px] px-[5%]">
          {columns.map((column, index) => (
            <div
              key={index}
              className="font-semibold text-[1rem] text-secondary text-center"
            >
              {column.label}
            </div>
          ))}
        </div>
        <div>
          {tableData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-8 border-b py-3 px-[5%] text-[.9rem] font-semibold text-center"
            >
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="text-center">
                  {row[column.key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
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

export default TableHome;
