import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaAt,
  FaEye,
  FaRegComment,
  FaRetweet,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import { TbUsersPlus } from "react-icons/tb";
import SearchComp from "./SearchComp";

function SpecificService({
  platform,
  onServiceClick,
  setIsModalOpen,
  authToken,
}) {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  const serviceIcons = {
    Followers: TbUsersPlus,
    Likes: CiHeart,
    "Mass DM": BiCommentDetail,
    Comments: FaRegComment,
    Reposts: FaRetweet,
    Views: FaEye,
    Mentions: FaAt,
  };

  const fetchServices = async () => {
    try {
      const response = await fetch(
        `https://theowletapp.com/server/api/v1/categories/${platform.id}/services`,
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
        setError(data.message || "Failed to fetch services");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchServices();
  }, [platform.id]);

  const handleServiceClick = (service) => {
    onServiceClick(service);
    setIsModalOpen("orderForm");
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white h-fit text-[#101828] pb-4 rounded-[16px] border w-[60%] lgss:w-[30%] pt-3 flex flex-col gap-2 justify-start items-start">
        <SearchComp placeholder={"Search for any platform"} />
        <div className="flex flex-col gap-2 w-full pl-4">
          <div className="flex items-center">
            <FaArrowLeft
              onClick={() => setIsModalOpen("searchPlatforms")}
              className="mr-2 cursor-pointer"
            />
            <p>Back</p>
          </div>
          <h2 className="text-[16px] font-semibold">
            {platform.name} Services
          </h2>
          {error && <div className="text-red-500">{error}</div>}
          <ul className="flex flex-col text-left gap-2 text-[1rem]">
            {services.length > 0 ? (
              services.map((service) => (
                <li
                  key={service.id}
                  onClick={() => handleServiceClick(service.name)}
                  className="cursor-pointer flex items-center"
                >
                  {React.createElement(serviceIcons[service.name], {
                    className: "mr-2",
                  })}
                  {platform.name} {service.name}
                </li>
              ))
            ) : (
              <li>No services available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpecificService;
