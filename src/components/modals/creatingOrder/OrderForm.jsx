import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderForm = ({ platform, service, setIsModalOpen, authToken }) => {
  const [platforms, setPlatforms] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState(platform);
  const [selectedService, setSelectedService] = useState(service);
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState(null);
  const [loadingPlatforms, setLoadingPlatforms] = useState(false);
  const [loadingServices, setLoadingServices] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchPlatforms = async () => {
      setLoadingPlatforms(true);
      try {
        const response = await fetch(
          "https://theowletapp.com/server/api/v1/categories",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setPlatforms(data.data);
        } else {
          console.error(data.message || "Failed to fetch platforms");
        }
      } catch (err) {
        console.error("Error:", err || "Something went wrong");
      } finally {
        setLoadingPlatforms(false);
      }
    };

    fetchPlatforms();
  }, [authToken]);

  useEffect(() => {
    const fetchServices = async () => {
      if (!selectedPlatform) return;

      setLoadingServices(true);
      try {
        const response = await fetch(
          `https://theowletapp.com/server/api/v1/categories/${selectedPlatform.id}/services`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setServices(data.data.services);
        } else {
          console.error(data.message || "Failed to fetch services");
        }
      } catch (err) {
        console.error("Error:", err || "Something went wrong");
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, [selectedPlatform, authToken]);

  useEffect(() => {
    if (quantity && selectedService) {
      const max = parseFloat(selectedService.max);
      const min = parseFloat(selectedService.min);

      if (quantity < min || quantity > max) {
        toast.error(`Quantity must be between ${min} and ${max}`);
        setAmount(null);
        return;
      }

      const calculatedAmount = (selectedService.rate / 1000) * quantity;
      setAmount(calculatedAmount);
    } else {
      setAmount(null);
    }
  }, [quantity, selectedService]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (
      !selectedService ||
      quantity < parseFloat(selectedService.min) ||
      quantity > parseFloat(selectedService.max)
    ) {
      toast.error(
        `Quantity must be between ${selectedService.min} and ${selectedService.max}`
      );
      setSubmitting(false);
      return;
    }

    const requestBody = {
      serviceId: selectedService.service,
      quantity: quantity,
      amount: amount.toFixed(2),
      link: socialMediaLink,
    };

    try {
      const response = await fetch(
        "https://theowletapp.com/server/api/v1/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success("Order created successfully!");
      } else {
        toast.error(data.message || "Failed to create order");
      }
    } catch (error) {
      toast.error(error.message || "Error creating order");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        onClick={handleOverlayClick}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div className="bg-white h-fit pb-4 rounded-[16px] border w-[90%] lgss:w-[30%] pt-3 px-5 flex flex-col justify-start items-start">
          <div className="pt-3 w-full flex justify-between items-center">
            <h2 className="text-2xl font-bold">Create an Order</h2>
            <FaTimes
              onClick={() => setIsModalOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="block">
              <span className="font-semibold">Platform</span>
              {loadingPlatforms ? (
                <ClipLoader
                  color="#123abc"
                  loading={loadingPlatforms}
                  size={24}
                />
              ) : (
                <select
                  value={selectedPlatform?.id}
                  onChange={(e) =>
                    setSelectedPlatform(
                      platforms.find((p) => p.id === e.target.value)
                    )
                  }
                  className="block w-full mt-1 rounded-md outline-none border-gray-300 shadow-sm px-3 py-2 text-sm"
                >
                  {platforms.map((platform) => (
                    <option key={platform.id} value={platform.id}>
                      {platform.name}
                    </option>
                  ))}
                </select>
              )}
            </label>
            <label className="block mt-1">
              <span className="font-semibold">Service</span>
              {loadingServices ? (
                <ClipLoader
                  color="#123abc"
                  loading={loadingServices}
                  size={24}
                />
              ) : (
                <select
                  value={selectedService?.service}
                  onChange={(e) =>
                    setSelectedService(
                      services.find((s) => s.service === e.target.value)
                    )
                  }
                  className="block w-full mt-1 rounded-md outline-none border-gray-300 shadow-sm px-3 py-2 text-sm"
                >
                  {services.map((service) => (
                    <option key={service.service} value={service.service}>
                      {service.name}
                    </option>
                  ))}
                </select>
              )}
            </label>
            <label className="block mt-1">
              <span className="font-semibold">Social Media Profile Link</span>
              <input
                type="text"
                value={socialMediaLink}
                onChange={(e) => setSocialMediaLink(e.target.value)}
                placeholder={`Example: https://www.${selectedPlatform?.name.toLowerCase()}.com/username`}
                className="block w-full mt-1 rounded-md outline-none border-gray-300 shadow-sm px-3 py-2 text-sm"
              />
            </label>
            <label className="block mt-1">
              <span className="font-semibold">Quantity</span>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="How many followers do you want?"
                className="block w-full mt-1 rounded-md outline-none border-gray-300 shadow-sm px-3 py-2 text-sm"
              />
            </label>
            <div className="bg-gray-100 px-4 mt-2 rounded-md text-sm text-gray-700">
              <strong>IMPORTANT</strong>
              <ul>
                <li>Delivery rate: 1-10k per day</li>
                <li>
                  Refill starts after 24hrs (You might experience delays
                  refilling sometimes)
                </li>
              </ul>
            </div>
            {amount !== null && (
              <div className="bg-[#FFFAEB] rounded-[10px] border-[1px] border-[#FEDF89] text-[#B54708] py-2 mt-4 text-md">
                <h2 className="text-xl px-3 py-2 border-b-[1px] border-[#FEDF89] uppercase font-bold">
                  order details
                </h2>
                <div className="flex w-full justify-between items-center px-3 py-1">
                  <strong>Amount to Pay: </strong>
                  <span className="font-semibold text-xl">
                    ${amount.toFixed(2)}
                  </span>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="mt-4 w-full bg-primary text-white py-2 rounded-md flex justify-center items-center"
              disabled={submitting}
            >
              {submitting ? (
                <ClipLoader color="#fff" loading={submitting} size={20} />
              ) : (
                "Continue Order"
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default OrderForm;

// Amount
//API(max != min), (rate/1000)*quantity = amount
//(max==min), rate = amount
