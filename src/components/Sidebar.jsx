import React, { useState } from "react";
import { LuArrowLeftToLine } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { avatar, logo } from "../assets";
import CreateOrderBtn from "./buttons/CreateOrderBtn";
import UserInfo from "./UserInfo";
import NavLinks from "./NavLinks";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="lgss:w-1/5 hidden lgss:flex flex-col h-full shadow-sm border-r-[1px] pt-4 bg-white shadow-gray-400/10 pb-10">
        <div className="w-full h-full px-[5%] flex gap-5 justify-between items-center border-b-[1px] pb-5">
          <img src={logo} alt="the-owulet logo" />
          <div className="bg-white shadow-gray-400/30 border-[1px] shadow-sm p-2 rounded-[8px] justify-center items-center">
            <LuArrowLeftToLine />
          </div>
        </div>
        <div className="w-full px-4 py-4 mx-auto border-b-[1px]">
          <CreateOrderBtn />
        </div>
        <div className="w-full py-4 mx-auto">
          <NavLinks />
        </div>
        <div className="pt-6 pb-2 justify-center flex w-full">
          <div className="bg-[#eaeef3] w-[85%] rounded-md h-[200px]"></div>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="absolute inset-0 bg-black opacity-80 z-10 backdrop-filter backdrop-blur-md lgss:hidden"></div>
          <div
            className={`absolute z-20 top-0 right-0  h-screen bg-white w-3/4 md:w-[35%] lgss:hidden flex flex-col text-scondary  transform transition-transform duration-300 ${
              isOpen ? "translate-x-0 " : "-translate-x-full"
            }`}
          >
            <div className="flex w-full justify-between items-center border-b-[1px] px-4 py-7">
              <UserInfo avatar={avatar} />
              <LiaTimesSolid
                className="text-[20px]"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="w-full px-[5%] py-5 border-b-[1px]">
              <CreateOrderBtn />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
