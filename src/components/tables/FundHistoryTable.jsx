import React from "react";
import { format } from "date-fns";

const FundHistoryTable = ({ data, columns }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return (
      <div className="flex flex-col">
        <div className="">{format(date, "do MMMM, yyyy")}</div>
        <div className="">{format(date, "HH:mm:ss")}</div>
      </div>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-transparent shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-3 px-6 text-left font-semibold text-[#475467] capitalize tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white border divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="py-4 px-6 whitespace-nowrap text-sm text-[#475467] font-medium"
                >
                  {column.key === "created_at"
                    ? formatDate(row[column.key])
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FundHistoryTable;
