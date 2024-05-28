import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const TableCard = ({ columns, tableData, numberOfOrders }) => {
  return (
    <div className="w-full border bg-white rounded-[12px]">
      <div className="w-full pb-4">
        <div className="grid grid-cols-5 gap-4 text-[18px] bg-secondary bg-opacity-5 py-5 text-secondary font-semibold">
          {columns.map((column, index) => (
            <div key={index} className="text-center">
              {column.label}
            </div>
          ))}
        </div>
        <div className="mt-4">
          {tableData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-5 gap-4 border-b px-3 py-3 w-full"
            >
              {columns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="text-center text-[.9rem] font-semibold flex justify-center items-center"
                >
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

export default TableCard;
