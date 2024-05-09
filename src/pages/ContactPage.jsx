import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-bg h-screen">
      <div className="w-[20%]">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex flex-col lgss:w-[80%] z-0">
        <div className="lgss:hidden w-full px-[5%] flex justify-between items-center border-b-[1px] py-5">
          <img src={logo} alt="the-owulet logo" />
          <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
            <LuBell />
            <LuMenu onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <div className="w-full hidden lgss:flex flex-col">
          <HomeSearch />
          <div className="flex flex-col justify-start items-start text-left px-[5%]">
            <h1 className="text-[2rem] font-semibold">Contact Us</h1>
            <p className="text-secondary">Reach out anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
