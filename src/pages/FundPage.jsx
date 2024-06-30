import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import HomeSearch from "../components/input/HomeSearch";
import PaymentBtns from "../components/buttons/PaymentBtns";
import CommonH1 from "../components/CommonH1";
import FundHistoryTable from "../components/tables/FundHistoryTable";
import SearchPlatforms from "../components/modals/creatingOrder/SearchPlatforms";
import {
  book,
  cryptomus,
  flutter,
  homeEmptyIcon,
  korapay,
  logo,
  monnify,
} from "../assets";
import { LuBell, LuMenu } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import ClipLoader from "react-spinners/ClipLoader";
import useFetchUserData from "../hooks/useFetchUserData";

const columns = [
  { label: "ID", key: "trans_id" },
  { label: "Method", key: "method" },
  { label: "Cost", key: "amount" },
  { label: "Date", key: "created_at" },
];

const FundPage = ({ authToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePayment, setActivePayment] = useState(null);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("");

  const { userData, error, loading: userLoading } = useFetchUserData(authToken);
  const { user, wallet } = userData;

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await axios.get(
          "https://theowletapp.com/server/api/v1/payment/history",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        if (response.data.success) {
          setPaymentHistory(response.data.data);
        } else {
          throw new Error("Failed to fetch payment history");
        }
      } catch (error) {
        console.error("Error fetching payment history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, [authToken]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.monnify.com/plugin/monnify.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [authToken]);

  const payWithMonnify = () => {
    if (!user || !amount) {
      toast.error("Please input the amount.");
      return;
    }

    MonnifySDK.initialize({
      amount: parseFloat(amount),
      currency: wallet.currency,
      reference: `${new Date().getTime()}`,
      customerFullName: `${user.firstname} ${user.lastname}`,
      customerEmail: user.email,
      apiKey: "MK_TEST_JKUWW3YGPJ",
      contractCode: "7751744568",
      paymentDescription: "Lahray World",
      metadata: {
        name: user.firstname,
        age: user.age || 0,
      },
      onLoadStart: () => {
        console.log("Loading has started");
      },
      onLoadComplete: () => {
        console.log("SDK is UP");
      },
      onComplete: (response) => {
        console.log(response);

        const trxRef = response.transactionReference;

        axios
          .post(
            "https://theowletapp.com/server/api/v1/fund/with/monnify",
            {
              trx_ref: trxRef,
              amount: amount,
            },
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          )
          .then((response) => {
            if (response.data.success) {
              toast.success("Payment successful!");
            } else {
              toast.error("Payment failed!");
            }
          })
          .catch((error) => {
            console.error("Error in Monnify payment:", error);
            toast.error("An error occurred during the payment process.");
          });
      },
      onClose: (data) => {
        console.log(data);
      },
    });
  };

  const handlePaymentClick = (method) => {
    if (method !== "monnify") {
      toast.error("Please select only Monnify as the payment method.");
      return;
    }
    setActivePayment(method);
  };

  return (
    <div className="w-full flex flex-col lgss:flex-row bg-bg">
      <ToastContainer />
      <div className="w-[20%]">
        <Sidebar
          user={user}
          getInitials={getInitials}
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
          <HomeSearch user={user} getInitials={getInitials} />
          <div className="flex lgss:flex-row flex-col gap-10 w-full h-full justify-between lgss:py-12 px-[5%]">
            <div className="lgss:bg-white lgss:w-[40%] lgss:border shadow-md py-6 rounded-[12px] flex flex-col justify-start items-start text-left">
              <CommonH1 title="Fund your account" />
              <div className="w-full flex flex-col px-[5%] pt-5">
                <h1 className="text-[1rem] lgss:text-[1.3rem] font-medium text-secondary">
                  Amount
                </h1>
                <div className="relative w-full">
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="px-3 py-4 border-2 mt-2 w-full rounded-[8px] text-black outline-none"
                    placeholder={`${wallet ? wallet.symbol : ""} 1,000`}
                  />
                  <div className="absolute inset-y-0 right-0 px-3 flex gap-2 items-center pointer-events-none text-black text-[1rem]">
                    <p>{wallet ? wallet.currency : ""}</p>
                    <FaAngleDown />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col px-[5%] pt-5">
                <h1 className="text-[1rem] lgss:text-[1.3rem] font-medium text-secondary">
                  Select payment method
                </h1>
                <div className="flex-col gap-2">
                  <div className="flex justify-between gap-4 pt-4 items-center w-full">
                    <PaymentBtns
                      img={flutter}
                      isActive={activePayment === "flutter"}
                      onClick={() => handlePaymentClick("flutter")}
                    />
                    <PaymentBtns
                      img={cryptomus}
                      isActive={activePayment === "cryptomus"}
                      onClick={() => handlePaymentClick("cryptomus")}
                    />
                  </div>
                  <div className="flex justify-between gap-4 pt-4 items-center w-full">
                    <PaymentBtns
                      img={korapay}
                      isActive={activePayment === "korapay"}
                      onClick={() => handlePaymentClick("korapay")}
                    />
                    <PaymentBtns
                      img={monnify}
                      isActive={activePayment === "monnify"}
                      onClick={() => handlePaymentClick("monnify")}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[90%] mx-auto flex flex-col gap-1 px-[5%] mt-6 bg-[#EAECF0] bg-opacity-50 py-4 rounded-[8px] text-secondary font-semibold text-[.8rem] lgss:text-[0.9rem]">
                <div className="pb-2 pt-1 border-b-[1px] mb-2">
                  <h1 className="font-semibold text-[20px] text-black">
                    CASHBACK DETAILS
                  </h1>
                </div>
                <p>8% Cashback on all Payments from 6am - 11pm</p>
                <p>20% Hootback on all Payments from 11pm - 5:59am</p>
              </div>
              <div className="w-[90%] mx-auto flex flex-col px-[5%] mt-6 bg-[#FEDF89] bg-opacity-30 py-3 rounded-[8px] font-semibold text-[.9rem] lgss:text-[1.2rem] text-primary">
                <h1 className="font-semibold py-3">IMPORTANT</h1>
                <ul className="list-disc px-[5%] border-t-2 border-[#FEDF89] py-4 flex flex-col gap-4 text-sm">
                  <li>
                    Pay exactly the amount you have imputed to pay, do not pay
                    lesser or higher than the amount you have placed.
                  </li>
                  <li>
                    To avoid your account being flagged or suspended, make sure
                    you are paying with your own bank or ATM card except if you
                    are using POS payment (do not pay with different banks, make
                    sure you are using the same bank you have been using to pay)
                  </li>
                </ul>
                <p className="text-sm">
                  Payments are updated instantly but in some cases where it is
                  taking too much time to update, kindly wait for 1-3hours, it
                  will be updated, if after 5hours and it has not been
                  completed, kindly send a mail to payment@theowlette.com
                </p>
              </div>
              <div className="w-full px-[5%] pt-4">
                <button
                  type="button"
                  onClick={payWithMonnify}
                  className="bg-primary px-5 w-full text-white flex justify-center gap-4 items-center py-4 rounded-[8px] font-semibold text-[18px]"
                >
                  Pay now
                </button>
              </div>
            </div>
            <div className="lgss:w-[60%] bg-white h-fit py-3 rounded-[12px] border shadow-md flex flex-col">
              <CommonH1 title="Funding history" />
              {loading || userLoading ? (
                <div className="flex justify-center items-center py-4">
                  <ClipLoader size={32} />
                </div>
              ) : paymentHistory.length === 0 ? (
                <div className="w-full flex flex-col justify-center items-center pb-3">
                  <img src={homeEmptyIcon} alt="" />
                  <div className="flex flex-col gap-3 font-semibold">
                    <h2 className="text-[1.2rem]">No Funding History</h2>
                  </div>
                </div>
              ) : (
                <FundHistoryTable data={paymentHistory} columns={columns} />
              )}
            </div>
          </div>
        </div>
      </div>
      <SearchPlatforms
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default FundPage;
