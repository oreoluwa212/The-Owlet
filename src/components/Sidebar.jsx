import React, { useEffect, useState } from "react";
import { LuArrowLeftToLine } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { TiPlus } from "react-icons/ti";
import { avatar, logo } from "../assets";
import CreateOrderBtn from "./buttons/CreateOrderBtn";
import UserInfo from "./UserInfo";
import NavLinks from "./NavLinks";
import QuickLinks from "./cards/QuickLinks";
import SearchPlatforms from "./modals/creatingOrder/SearchPlatforms";
import SpecificService from "./modals/creatingOrder/SpecificService";
import { FaAngleDown } from "react-icons/fa";
import OrderForm from "./modals/creatingOrder/OrderForm";

const Sidebar = ({ user, getInitials, isOpen, setIsOpen, setIsModalOpen }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
    openModal("specificService");
  };

  const handleServiceClick = (service) => {
    setSelectedService(`${selectedPlatform} ${service}`);
    openModal("orderForm");
  };

  return (
    <>
      <div className="h-screen lgss:w-1/5 hidden lgss:flex flex-col shadow-sm border-r-[1px] pt-3 bg-white shadow-gray-400/10 pb-10 z-10 fixed">
        <div className="w-full h-[8%] px-[5%] flex gap-5 justify-between items-center border-b-[1px] pb-3">
          <img src={logo} alt="the-owulet logo" className="h-10" />
          <div className="bg-white shadow-gray-400/30 border-[1px] shadow-sm p-1 rounded-[8px] justify-center items-center">
            <LuArrowLeftToLine />
          </div>
        </div>
        <div className="w-full px-4 py-2 mx-auto border-b-[1px] h-[10%] flex justify-center">
          <button
            onClick={() => openModal("searchPlatforms")}
            className="bg-primary lgss:px-5 w-full text-white flex justify-center lgss:gap-4 gap-1 items-center py-3 rounded-[4px] font-semibold text-[18px]"
          >
            <TiPlus />
            <p className="text-[.9rem]">Create order</p>
          </button>
        </div>
        <div className="w-full mx-auto">
          <NavLinks />
        </div>
        <div className="w-full px-6 pt-7 border-t-2">
          <div className="bg-[#eaeef3] w-full rounded-md py-8 px-6">
            <div className="flex w-full justify-between pb-2">
              <h1 className="uppercase text-secondary">quick links</h1>
              <LiaTimesSolid />
            </div>
            <p className="text-left font-semibold text-[18px]">
              How to add funds to your OwletPay wallet.
            </p>
            <QuickLinks />
          </div>
        </div>
      </div>

      {activeModal === "searchPlatforms" && (
        <SearchPlatforms
          setIsModalOpen={setActiveModal}
          isModalOpen={true}
          onPlatformClick={handlePlatformClick}
        />
      )}

      {activeModal === "specificService" && (
        <SpecificService
          platform={selectedPlatform}
          isModalOpen={true}
          onServiceClick={handleServiceClick}
          setIsModalOpen={setActiveModal} // Pass setActiveModal to handle back button click
        />
      )}

      {activeModal === "orderForm" && (
        <OrderForm
          platform={selectedPlatform}
          service={selectedService}
          setIsModalOpen={setActiveModal}
          isModalOpen={true}
        />
      )}

      {isOpen && (
        <>
          <div className="absolute inset-0 bg-black opacity-80 z-10 backdrop-filter backdrop-blur-md lgss:hidden"></div>
          <div
            className={`absolute z-20 top-0 right-0 bg-white h-full lgss:w-3/4 mds:w-[50%] w-[70%] lgss:hidden flex flex-col text-secondary transform transition-transform duration-300 ${
              isOpen ? "translate-x-0 " : "-translate-x-full"
            }`}
          >
            <div className="flex w-full justify-between items-center border-b-[1px] px-4 py-7 lgss:gap-16">
              {user && (
                <UserInfo
                  initials={getInitials(`${user.firstname} ${user.lastname}`)}
                  icon={<FaAngleDown />}
                  firstName={user.firstname}
                  lastName={user.lastname}
                />
              )}
              <LiaTimesSolid
                className="text-[20px]"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="w-full px-[5%] py-5 border-b-[1px] text-white">
              <button
                onClick={() => openModal("searchPlatforms")}
                className="bg-primary lgss:px-5 w-full text-white flex justify-center lgss:gap-4 gap-1 items-center py-3 rounded-[4px] font-semibold text-[18px]"
              >
                <TiPlus />
                <p className="text-[.9rem]">Create order</p>
              </button>
            </div>
            <div className="w-full mx-auto">
              <NavLinks />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
