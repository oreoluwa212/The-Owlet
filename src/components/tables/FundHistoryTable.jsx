import React from "react";

function FundHistoryTable({ columns, tableData }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-secondary bg-opacity-5 py-4 lgss:h-[73px] text-[18px] flex justify-between items-start text-left px-6 w-full">
          {columns.map((column, index) => (
            <th key={index} className="font-semibold text-[1rem] text-secondary">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="lgss:h-[90px] border-y-2 flex justify-between items-center lgss:text-[.9rem] text-[.6rem]  py-3 font-semibold"
          >
            {columns.map((column, colIndex) => (
              <td className="px-5" key={colIndex}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FundHistoryTable;
