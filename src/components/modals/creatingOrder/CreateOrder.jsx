import React, { useState, useEffect } from "react";

function CreateOrder({ platform, service }) {
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-[16px] border w-[30%] p-5">
        <h2 className="text-2xl font-semibold mb-4">
          Create Order for {platform} {service}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="profileLink"
            >
              Social Media Profile Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="profileLink"
              type="text"
              placeholder={`https://www.${platform.toLowerCase()}.com/username`}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="number"
              placeholder="How many followers do you want?"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <p className="text-gray-700 text-sm mb-4">
            <strong>IMPORTANT</strong>: Delivery rate is 1-10k per day. Refill
            starts after 24hrs (You might experience delays refilling
            sometimes).
          </p>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Continue Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateOrder;
