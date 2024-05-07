import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { logo } from "../assets";

const OrderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full flex flex-col lgss:flex-row">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lgss:hidden w-full px-[5%] flex justify-between items-center border-b-[1px] py-5">
        <img src={logo} alt="the-owulet logo" />
        <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
          <LuBell />
          <LuMenu onClick={() => setIsOpen(true)} />
        </div>
      </div>
      <div className="w-full lgss:w-4/5 h-full p-[5%]">
        <h1>Orders Page</h1>
      </div>
    </div>
  );
};

export default OrderPage;
