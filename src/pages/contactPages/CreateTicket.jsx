import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { book, logo } from "../../assets";
import { LuBell, LuMenu } from "react-icons/lu";
import HomeSearch from "../../components/input/HomeSearch";
import CreateOrderBtn from "../../components/buttons/CreateOrderBtn";
import CommonH1 from "../../components/CommonH1";
import FormInput from "../../components/input/FormInput";
import { AiOutlineSearch } from "react-icons/ai";
import TicketCards from "../../components/cards/TicketCards";

const CreateTicket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("empty");
  const [activeStatusTab, setActiveStatusTab] = useState("pending");
  const [pendingTickets, setPendingTickets] = useState([
    {
      complainHead: "Invalid Order",
      user: "Mildred",
      complaint:
        "If you have any other questions or requests, please feel free to open a new ticket or refer to the previous ticket using the ticket number, and we will be happy to assist you further.",
      time: "3h ago",
    },
    {
      complainHead: "Cancel my Order",
      user: "Michael",
      complaint:
        "If you have any other questions or requests, please feel free to open a new ticket or refer to the previous ticket using the ticket number, and we will be happy to assist you further.",
      time: "8h ago",
    },
  ]);
  const [resolvedTickets, setResolvedTickets] = useState([
    {
      complainHead: "Invalid Order",
      user: "Mabel",
      complaint:
        "If you have any other questions or requests, please feel free to open a new ticket or refer to the previous ticket using the ticket number, and we will be happy to assist you further.",
      time: "8h ago",
    },
  ]);

  const pendingCount = pendingTickets.length;
  const resolvedCount = resolvedTickets.length;

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
            <div className="flex lgss:flex-row flex-col gap-5 w-full h-full justify-between lgss:py-7">
              <div className="lgss:bg-white lgss:w-[45%] lgss:border shadow-md pt-6 rounded-[12px] flex flex-col justify-start items-start text-left">
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
                <div className="bg-white lgss:w-[45%] w-[90%] mx-auto border shadow-md py-5 rounded-[12px] h-[420px] flex flex-col ">
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
                    <div className="w-full flex lgss:flex-row flex-col justify-between gap-4">
                      <div className="w-[30%] flex text-[14px]">
                        <button
                          className={`bg-transparent border-b-2 px-3 inline-flex gap-2 py-2 ${
                            activeStatusTab === "pending"
                              ? "text-primary border-b-primary"
                              : "text-secondary border-b-secondary border-b-[1px]"
                          }`}
                          onClick={() => setActiveStatusTab("pending")}
                        >
                          Pending
                          <span
                            className={`px-2 font-semibold rounded-full ${
                              activeStatusTab === "pending"
                                ? "border-primary border-[1px] bg-pinkBg"
                                : "bg-[#F9FAFB] border-[#EAECF0] border-[1px]"
                            }`}
                          >
                            {pendingCount}
                          </span>
                        </button>
                        <button
                          className={`bg-transparent border-b-2 px-3 inline-flex gap-2 py-2 ${
                            activeStatusTab === "resolved"
                              ? "text-primary border-b-primary"
                              : "text-secondary border-b-secondary border-b-[1px]"
                          }`}
                          onClick={() => setActiveStatusTab("resolved")}
                        >
                          Resolved
                          <span
                            className={`px-2 font-semibold rounded-full ${
                              activeStatusTab === "resolved"
                                ? "bg-pinkBg border-[1px] border-primary"
                                : "bg-[#F9FAFB] border-[#EAECF0] border-[1px]"
                            }`}
                          >
                            {resolvedCount}
                          </span>
                        </button>
                      </div>
                      <div className="lgss:w-[50%] w-full">
                        <div className="relative w-full">
                          <input
                            type="text"
                            className="w-full bg-white border h-12 rounded-[8px] px-10 outline-none"
                            placeholder="Search"
                            name="search"
                            id="search"
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <AiOutlineSearch className="text-gray-400 text-[22px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      {activeStatusTab === "pending" ? (
                        <div className="flex flex-col gap-6 w-full">
                          <TicketCards
                            complainHead={"Invalid Order"}
                            user={"Mildred"}
                            complaint={
                              "If you have any other questions or requests, please feel free to open a new ticket or refer to the previous ticket using the ticket number, and we will be happy to assist you further."
                            }
                            time={"3h ago"}
                          />
                          <TicketCards
                            complainHead={"Cancel my Order"}
                            user={"Michael"}
                            complaint={
                              "If you have any other questions or requests, please feel free to open a new ticket or refer to the previous ticket using the ticket number, and we will be happy to assist you further."
                            }
                            time={"8h ago"}
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col gap-6 w-full">
                          <TicketCards
                            complainHead={"Invalid Order"}
                            user={"Mabel"}
                            complaint={
                              "If you have any other questions or requests, please feel free to open a new ticket or refer to the previous ticket using the ticket number, and we will be happy to assist you further."
                            }
                            time={"8h ago"}
                          />
                        </div>
                      )}
                    </div>
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
