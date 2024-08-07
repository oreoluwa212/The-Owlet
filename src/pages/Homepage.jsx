import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { LuBell, LuInbox, LuMenu } from "react-icons/lu";
import { carton, homeEmptyIcon, logo, medal, purse } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import HomeCard from "../components/cards/HomeCard";
import HomeSearchInputWhite from "../components/input/HomeSearchInput";
import HomeFilters from "../components/buttons/HomeFilters";
import FilterBtn from "../components/buttons/FilterBtn";
import HomeCardMobile from "../components/cards/HomeCardMobile";
import TableHome from "../components/cards/TableHome";
import { columns } from "../assets/data/data";
import SearchPlatforms from "../components/modals/creatingOrder/SearchPlatforms";
import CreateOrder from "../components/modals/creatingOrder/CreateOrder";
import useFetchUserData from "../hooks/useFetchUserData";

const Homepage = ({ authToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [paymentReference, setPaymentReference] = useState(null);

  const { userData, error, loading } = useFetchUserData(authToken);

  const handlePaymentCompletion = async (paymentReference) => {
    setPaymentReference(paymentReference);
    sendPaymentDetails(paymentReference);
  };

  const sendPaymentDetails = async (paymentReference) => {
    try {
      const response = await axios.post(
        "https://theowletapp.com/server/api/v1/fund/with/monnify",
        {
          trx_ref: paymentReference,
          amount: 5000,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to send payment details");
      }
      console.log("Payment details sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending payment details:", error);
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const inProgressOrders = orders.filter(
    (order) => order.status.status.toLowerCase() === "processing"
  );

  return (
    <div className="max-w-full flex flex-col lgss:flex-row">
      <div className="w-[20%]">
        <Sidebar
          user={userData.user}
          getInitials={getInitials}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <div className="flex flex-col lgss:w-[80%] z-0">
        <div className="lgss:hidden w-full px-[5%] flex justify-between items-center border-b-[1px] py-5 bg-white">
          <img src={logo} alt="the-owulet logo" />
          <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
            <LuBell />
            <LuMenu onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <div className="w-full flex flex-col bg-bg h-screen">
          <HomeSearch user={userData.user} getInitials={getInitials} />
          <div className="w-full flex flex-col px-[5%]">
            {inProgressOrders.length === 0 ? (
              <div className="flex flex-row flex-wrap w-full gap-4 justify-between pt-12">
                <HomeCard
                  title="Available Balance"
                  value={
                    userData.wallet
                      ? `${userData.wallet.symbol}${userData.wallet.balance}`
                      : "0"
                  }
                  img={purse}
                />
                <HomeCard
                  title="Total Orders"
                  value={`${userData.total_order}`}
                  img={carton}
                />
                <HomeCard
                  title="Account status"
                  value={userData.user?.tier}
                  img={medal}
                />
              </div>
            ) : (
              <div className="flex flex-row flex-wrap w-full gap-4 justify-between pt-12">
                <HomeCard
                  title="Available Balance"
                  value={
                    userData.wallet
                      ? `${userData.wallet.symbol}${userData.wallet.balance}`
                      : "0"
                  }
                  img={purse}
                />
                <HomeCard
                  title="Total Orders"
                  value={inProgressOrders.length}
                  img={carton}
                />
                <HomeCard
                  title="Account status"
                  value={userData.user?.tier}
                  img={medal}
                />
              </div>
            )}
            {inProgressOrders.length === 0 ? (
              <div className="w-full flex flex-col justify-center items-center pt-6">
                <img src={homeEmptyIcon} alt="" />
                <div className="flex flex-col gap-3 font-semibold">
                  <h2 className="text-[1.2rem]">No pending orders</h2>
                </div>
              </div>
            ) : (
              <div>
                <div className="w-full">
                  <div className="w-full py-8 hidden lgss:flex justify-between">
                    <div className="flex gap-3">
                      <HomeFilters name="In Progress" />
                      <HomeFilters name="All Platforms" />
                      <FilterBtn name="More Filters" />
                    </div>
                    <HomeSearchInputWhite />
                  </div>
                  <div className="hidden w-full lgss:flex justify-center items-center py-2">
                    <TableHome
                      heading="In Progress"
                      columns={columns}
                      tableData={inProgressOrders}
                      numberOfOrders={inProgressOrders.length}
                    />
                  </div>
                </div>
                <div className="lgss:hidden flex flex-col gap-5 text-left py-6">
                  <h1 className="uppercase font-semibold text-secondary">
                    Orders in Progress
                  </h1>
                  {inProgressOrders.map((order) => (
                    <HomeCardMobile
                      key={order.id}
                      title={order.service_name}
                      value={`${order.status.remains} remaining`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <SearchPlatforms
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setPlatform={setPlatform}
        setService={setService}
      />
      {platform && service && (
        <CreateOrder platform={platform} service={service} />
      )}
    </div>
  );
};

export default Homepage;
