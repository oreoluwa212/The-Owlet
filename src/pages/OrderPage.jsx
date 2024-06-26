import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuInbox, LuMenu } from "react-icons/lu";
import { homeEmptyIcon, logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import HomeSearchInputWhite from "../components/input/HomeSearchInput";
import HomeFilters from "../components/buttons/HomeFilters";
import FilterBtn from "../components/buttons/FilterBtn";
import HomeCardMobile from "../components/cards/HomeCardMobile";
import SearchPlatforms from "../components/modals/creatingOrder/SearchPlatforms";
import TableHome from "../components/cards/TableHome";
import Cookies from "js-cookie";
import axios from "axios";

const columns = [
  { label: "ID", key: "order_id" },
  { label: "Services", key: "service_name" },
  { label: "Date", key: "created_at" },
  { label: "Quantity", key: "quantity" },
  { label: "Cost", key: "amount" },
  { label: "Status", key: "status.status" },
  { label: "Progress", key: "status.remains" },
  { label: "Link", key: "link" },
];

const OrderPage = ({ authToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!authToken) {
          throw new Error("Auth token not provided");
        }

        const response = await axios.get(
          "https://theowletapp.com/server/api/v1/users/analytics",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        setUser(response.data.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://theowletapp.com/server/api/v1/orders/list/2",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.data.success) {
          setOrders(response.data.data.data);
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    fetchOrders();
  }, [authToken]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const countOrders = () => orders.length;

  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-bg h-screen">
      <div className="w-[20%]">
        <Sidebar
          user={user}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          getInitials={getInitials}
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
          <HomeSearch user={user} getInitials={getInitials} />
          <div className="w-full px-[5%]">
            <div className="flex justify-between w-full gap-4 pt-4">
              <div className="hidden lgss:flex gap-3">
                <HomeFilters name="In Progress" />
                <HomeFilters name="All Platforms" />
                <FilterBtn name="More Filters" />
              </div>
              <HomeSearchInputWhite />
              <div className="lgss:hidden flex">
                <FilterBtn />
              </div>
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : orders.length === 0 ? (
              <div className="mt-10 w-full bg-white h-fit py-3 border rounded-[8px]">
                <div className="px-3 py-4 text-[20px] border-b font-semibold flex gap-5 items-center">
                  <h1 className="text-left">All Orders</h1>
                  <div className="bg-[#FECDCA] bg-opacity-50 border-[#FECDCA] border-2 text-[16px] rounded-full text-primary py-1 px-3">
                    <p>{countOrders()} Orders</p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center pb-3">
                  <img src={homeEmptyIcon} alt="" />
                  <div className="flex flex-col gap-3 font-semibold">
                    <h2 className="text-[1.2rem]">No orders yet</h2>
                    <div className="text-primary flex gap-3 justify-center items-center">
                      <span>
                        <LuInbox />
                      </span>
                      <p>Place your first order now</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="hidden w-full lgss:flex items-center pt-8">
                  <TableHome
                    heading="Orders"
                    columns={columns}
                    tableData={orders}
                    numberOfOrders={countOrders()}
                  />
                </div>
                <div className="lgss:hidden flex flex-col text-left gap-4 mt-4">
                  <div className="w-full flex gap-4">
                    <h1 className="font-bold text-[1.3rem]">All Orders</h1>
                    <div className="bg-[#FECDCA] bg-opacity-50 border-[#FECDCA] border-2 text-[14px] rounded-full text-primary flex gap-1 font-semibold py-1 px-3">
                      {countOrders()}
                      <p>Orders</p>
                    </div>
                  </div>
                  {orders.map((order) => (
                    <HomeCardMobile
                      key={order.id}
                      title={order.service_name}
                      value={order.status.status}
                    />
                  ))}
                </div>
              </>
            )}
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

export default OrderPage;
