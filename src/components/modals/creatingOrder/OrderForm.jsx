import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const OrderForm = ({ platform, service, setIsModalOpen }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(platform);
  const [selectedService, setSelectedService] = useState(service);
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [quantity, setQuantity] = useState("");

  const services = {
    Instagram: [
      "Instagram followers",
      "Instagram likes",
      "Instagram Mass DM",
      "Instagram comments",
      "Instagram Reposts",
      "Instagram Views",
      "Instagram Mentions",
    ],
    Facebook: [
      "Facebook likes",
      "Facebook followers",
      "Facebook followers",
      "Facebook Mass DM",
      "Facebook comments",
      "Facebook Reposts",
      "Facebook Views",
      "Facebook Mentions",
    ],
    Twitter: ["Twitter followers", "Twitter retweets"],
    Tiktok: ["Tiktok followers", "Tiktok likes"],
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      serviceId: "2788", // Replace with actual serviceId based on selectedService
      quantity: quantity,
      amount: "0.1", // Adjust this based on your logic or API requirements
      link: socialMediaLink,
    };

    try {
      const response = await fetch("https://theowletapp.com/server/api/v1/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any authorization headers if required
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (data.success) {
        console.log("Order created:", data);
        // Handle success scenario, e.g., show success message, update UI, etc.
      } else {
        console.error("Failed to create order:", data.message || "Unknown error");
        // Handle failure scenario, e.g., show error message to user
      }
    } catch (error) {
      console.error("Error creating order:", error.message || "Unknown error");
      // Handle network error or any other unexpected errors
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white h-fit pb-4 rounded-[16px] border xs:w-[80%] w-[50%] lgss:w-[30%] pt-3 px-5 flex flex-col justify-start items-start">
        <div className="pt-3 w-full flex justify-between items-center">
          <h2 className="text-2xl font-bold">Create an Order</h2>
          <FaTimes
            onClick={() => setIsModalOpen(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="block mt-4">
            <span className="font-semibold">Platform</span>
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="block w-full mt-1 rounded-md outline-none border-gray-300 shadow-sm"
            >
              {Object.keys(services).map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4">
            <span className="font-semibold">Service</span>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="block w-full mt-1 rounded-md outline-none border-gray-300 shadow-sm"
            >
              {services[selectedPlatform].map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4">
            <span className="font-semibold">Social Media Profile Link</span>
            <input
              type="text"
              value={socialMediaLink}
              onChange={(e) => setSocialMediaLink(e.target.value)}
              placeholder={`Example: https://www.${selectedPlatform.toLowerCase()}.com/username`}
              className="block w-full mt-1 rounded-md outline-none border-gray-300 shadow-sm"
            />
          </label>
          <label className="block mt-4">
            <span className="font-semibold">Quantity</span>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="How many followers do you want?"
              className="block w-full mt-1 rounded-md outline-none border-gray-300 shadow-sm"
            />
          </label>
          <div className="bg-gray-100 p-4 mt-4 rounded-md text-sm text-gray-700">
            <strong>IMPORTANT</strong>
            <ul>
              <li>Delivery rate: 1-10k per day</li>
              <li>
                Refill starts after 24hrs (You might experience delays refilling
                sometimes)
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-primary text-white py-2 rounded-md"
          >
            Continue Order
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
