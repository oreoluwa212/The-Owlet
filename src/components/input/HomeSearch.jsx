import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { avatar } from "../../assets";
import UserInfo from "../UserInfo";
import { LuBell, LuMenu } from "react-icons/lu";

function HomeSearch() {
  return (
    <div className="hidden lgss:flex justify-between items-center w-full pl-[5%] py-7 bg-white mb-5 h-[85px] shadow-md">
      <div className="relative w-[30%]">
        <input
          type="text"
          className="w-full bg-[#F2F4F7] h-12 rounded-[8px] px-10 outline-none"
          placeholder="Search"
          name="search"
          id="search"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <AiOutlineSearch className="text-gray-400" />
        </div>
      </div>
      <div className="w-[30%] flex justify-end items-end">
        <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
          <LuBell />
          <LuMenu />
        </div>
      </div>
      <div className="w-[30%]">
        <UserInfo icon={<FaAngleDown/>} avatar={avatar} />
      </div>
    </div>
  );
}

export default HomeSearch;
