import React, { useState } from "react";

const OrderForm = ({ platform, service, setIsModalOpen, isModalOpen }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(platform);
  const [selectedService, setSelectedService] = useState(service);

  const services = {
    Instagram: ["Instagram followers", "Instagram likes", "Instagram comments"],
    Facebook: ["Facebook likes", "Facebook followers"],
    Twitter: ["Twitter followers", "Twitter retweets"],
    Tiktok: ["Tiktok followers", "Tiktok likes"],
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white h-fit pb-4 rounded-[16px] border w-[60%] lgss:w-[30%] pt-3 flex flex-col justify-start items-start">
        <div className="px-5 py-3 w-full">
          <h2 className="text-lg font-medium">Create an Order</h2>
          <label className="block mt-4">
            <span className="text-gray-700">Platform</span>
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm"
            >
              {Object.keys(services).map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Service</span>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm"
            >
              {services[selectedPlatform].map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Social Media Profile Link</span>
            <input
              type="text"
              placeholder={`Example: https://www.${selectedPlatform.toLowerCase()}.com/username`}
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm"
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Quantity</span>
            <input
              type="text"
              placeholder="How many followers do you want?"
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm"
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
            onClick={() => setIsModalOpen(null)}
            className="mt-4 w-full bg-primary text-white py-2 rounded-md"
          >
            Continue Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
