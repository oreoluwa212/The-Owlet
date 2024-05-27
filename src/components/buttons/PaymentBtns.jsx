import React from "react";

const PaymentBtns = ({ img, isActive, onClick }) => {
  return (
    <div
      className={`bg- border px-5 w-full text-white flex justify-center gap-4 items-center h-14 rounded-[12px] font-semibold ${
        isActive ? "border-primary" : ""
      }`}
      onClick={onClick}
    >
      {img && <img src={img} alt="Payment Button Image" />}
    </div>
  );
};

export default PaymentBtns;
