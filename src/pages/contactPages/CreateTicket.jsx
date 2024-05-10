import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { book, logo } from "../../assets";
import { LuBell, LuMenu } from "react-icons/lu";
import HomeSearch from "../../components/input/HomeSearch";
import CreateOrderBtn from "../../components/buttons/CreateOrderBtn";
import CommonH1 from "../../components/CommonH1";
import FormInput from "../../components/input/FormInput";

const CreateTicket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("empty");

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
        <div className="w-full lgss:flex flex-col">
          <HomeSearch />
          <div className="w-full px-[5%]">
            <div className="w-full flex lgss:flex-row flex-col gap-4 py-2">
              <div
                className={activeTab === "empty" ? "active" : ""}
                onClick={() => setActiveTab("empty")}
              >
                <CreateOrderBtn title="Empty Tab" />
              </div>
              <div
                className={activeTab === "active" ? "active" : ""}
                onClick={() => setActiveTab("active")}
              >
                <CreateOrderBtn title="Active Tab" />
              </div>
            </div>
            <div className="flex lgss:flex-row flex-col gap-5 w-full h-full justify-between lgss:py-12">
              <div className="lgss:bg-white lgss:w-[55%] lgss:border shaow-md pt-6 rounded-[12px] flex flex-col justify-start items-start text-left">
                <CommonH1 title="Create a ticket" />
                <div className="w-full px-[5%] pt-4">
                  <form action="tickets" className="flex flex-col gap-7">
                    <FormInput
                      name="report"
                      placeholder="What would you like to report?"
                      id="search"
                      label="Subject"
                      textarea={false}
                    />
                    <FormInput
                      name="description"
                      placeholder="Please describe the issue in detail"
                      id="description"
                      label="Description"
                      textarea={true}
                    />
                    <FormInput
                      name="file"
                      id="file"
                      label="Upload File"
                      upload={true}
                    />
                    <CreateOrderBtn title="Submit ticket" />
                  </form>
                </div>
              </div>
              {activeTab === "empty" ? (
                <div className="bg-white lgss:w-[45%] w-[90%] mx-auto border shaow-md py-5 rounded-[12px] h-[420px] flex flex-col ">
                  <CommonH1 title="Tickets" />
                  <div className="flex justify-center items-center w-full flex-col font-semibold text-[26px]">
                    <img className="h-[250px]" src={book} alt="" />
                    <h2>No tickets</h2>
                  </div>
                </div>
              ) : (
                <div className="lgss:w-[55%] bg-white border">
                  <CommonH1 title="Tickets" />
                  <div className="flex flex-col px-[5%] pt-5">
                     
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
