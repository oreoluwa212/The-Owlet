import React, { useState } from "react";

const TableCard = () => {
  const tableData = [
    {
      ID: "#53045701",
      Services: "Instagram Nigerian Followers",
      Date: "Jan 6 2022 12:04:22",
      Quantity: "10000",
      Cost: "#17,500.00",
      Status: "In progress",
      Progress: "60%",
      Link: "link",
    },
  ];

  return (
    <div className="w-[90%] border">
      <div className="px-4 py-4 text-[20px] font-semibold flex gap-5 items-center">
        <h1 className="text-left">In Progress</h1>
        <div className="bg-[#FECDCA] text-[14px] rounded-full text-primary py-2 px-4">
         <p>2 Orders</p>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Services</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={row.ID}>
              <td>{row.ID}</td>
              <td>{row.Services}</td>
              <td>{row.Date}</td>
              <td>{row.Quantity}</td>
              <td>{row.Cost}</td>
              <td>{row.Status}</td>
              <td>{row.Progress}</td>
              <td>{row.Link}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="previous">Previous</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
};

export default TableCard;
