import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import CreateOrderBtn from "../components/buttons/CreateOrderBtn";
import FormInput from "../components/input/FormInput";
import CommonH1 from "../components/CommonH1";
import SearchPlatforms from "../components/modals/creatingOrder/SearchPlatforms";

const SettingsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-bg h-screen">
      <div className="w-[20%]">
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <div className="flex flex-col lgss:w-[80%] z-0">
        <div className="lgss:hidden w-full px-[5%] flex justify-between items-center border-b-[1px] py-5">
          <img src={logo} alt="the-owulet logo" />
          <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
            <LuBell />
            <LuMenu onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <div className="w-full lgss:flex flex-col">
          <HomeSearch />
          <div className="flex lgss:flex-row flex-col gap-5 w-full h-full justify-between lgss:py-12 px-[5%]">
            <div className="lgss:bg-white lgss:w-[60%] lgss:border shaow-md pt-6 rounded-[12px] flex flex-col justify-start items-start h-fit py-3 text-left">
              <CommonH1 title="Edit your profile" />
              <div className="w-full px-[5%] pt-4">
                <form action="tickets" className="flex flex-col gap-7 w-full">
                  <div className="w-full flex gap-5">
                    <div className="w-1/2">
                      <FormInput
                        name="first name"
                        placeholder="Michael"
                        id="search"
                        label="First name"
                        textarea={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        name="last name"
                        placeholder="Pearson"
                        id="lname"
                        label="Last name"
                        textarea={false}
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-5">
                    <div className="w-1/2">
                      <FormInput
                        name="email"
                        placeholder="mike@gmail.com"
                        id="email"
                        label="Email"
                        textarea={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        name="phone number"
                        placeholder="07012345678"
                        id="pnumber"
                        label="Phone number"
                        textarea={false}
                      />
                    </div>
                  </div>
                  <CreateOrderBtn title="Save changes" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchPlatforms
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default SettingsPage;
