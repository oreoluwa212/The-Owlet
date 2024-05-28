import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import CreateOrderBtn from "../components/buttons/CreateOrderBtn";
import FormInput from "../components/input/FormInput";
import CommonH1 from "../components/CommonH1";
import SearchPlatforms from "../components/modals/creatingOrder/SearchPlatforms";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { FiCopy } from "react-icons/fi";

const generateRandomApiKey = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const SettingsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiKey, setApiKey] = useState(generateRandomApiKey());

  const handleCopy = () => {
    navigator.clipboard
      .writeText(apiKey)
      .then(() => {
        alert("API Key copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleGenerateNewKey = () => {
    const newApiKey = generateRandomApiKey();
    setApiKey(newApiKey);
  };

  const timeZones = [
    { value: "CET", label: "Central European Time (UTC +1:00)" },
    { value: "WAT", label: "West Africa Time (UTC +1:00)" },
    { value: "EST", label: "Eastern Standard Time (UTC -5:00)" },
    { value: "PST", label: "Pacific Standard Time (UTC -8:00)" },
  ];

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
            <div className="lgss:bg-white lgss:w-[50%] lgss:border shadow-md pt-6 rounded-[12px] flex flex-col justify-start items-start h-fit py-3 text-left">
              <CommonH1 title="Edit your profile" />
              <div className="w-full px-[5%] pt-4">
                <form action="tickets" className="flex flex-col gap-3 w-full">
                  <h3 className="font-semibold text-[14px] text-[#344054]">
                    PERSONAL INFORMATION
                  </h3>
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

                  <div className="w-full flex gap-5 mb-3">
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
                  <h3 className="font-semibold text-[14px] text-[#344054]">
                    CHANGE PASSWORD
                  </h3>

                  <div className="w-full flex gap-5">
                    <div className="w-1/2">
                      <FormInput
                        name="password"
                        placeholder="Enter current password"
                        id="current-password"
                        label="Current Password"
                        textarea={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        name="new password"
                        placeholder="Enter new password"
                        id="new-password"
                        label="New Password"
                        textarea={false}
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <CreateOrderBtn title="Save changes" />
                  </div>
                </form>
              </div>
            </div>

            <div className="lgss:w-[50%] w-full flex flex-col gap-10">
              <div className="lgss:bg-white lgss:border shadow-md pt-6 rounded-[12px] flex flex-col justify-start items-start h-fit py-3 text-left">
                <div className="w-full border-b-2 px-5 pb-1 flex items-center justify-between text-[18px] ">
                  <h1 className="font-bold">Time zone</h1>
                  <PiDotsThreeOutlineVerticalBold />
                </div>
                <div className="w-full">
                  <div className="w-full px-[5%] py-4">
                    <FormInput
                      placeholder="Central European Time, West Africa Time (UTC +1:00)"
                      select={true}
                      options={timeZones}
                    />
                  </div>
                  <hr />
                  <div className="px-[5%] py-4">
                    <CreateOrderBtn title="Save changes" />
                  </div>
                </div>
              </div>
              <div className="lgss:bg-white lgss:border shadow-md pt-6 rounded-[12px] flex flex-col justify-start items-start h-fit py-3 text-left">
                <div className="w-full border-b-2 px-5 pb-1 flex items-center justify-between text-[18px] ">
                  <h1 className="font-bold">API Key</h1>
                  <PiDotsThreeOutlineVerticalBold />
                </div>
                <div className="w-full">
                  <div className="w-full px-[5%] py-4">
                    <FormInput
                      name="api-key"
                      value={apiKey}
                      placeholder="API Key"
                      select={false}
                      textarea={false}
                      icon={<FiCopy />}
                      onIconClick={handleCopy} // Handle copy icon click
                    />
                  </div>
                  <hr />
                  <div className="px-[5%] py-4">
                    <CreateOrderBtn
                      title="Generate new key"
                      onClick={handleGenerateNewKey}
                    />
                  </div>
                </div>
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