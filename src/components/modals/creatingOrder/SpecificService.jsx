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
import ClipLoader from "react-spinners/ClipLoader";

const SpecificService = ({
  platform,
  onServiceClick,
  setIsModalOpen,
  authToken,
}) => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState(null);

  console.log("services:", services);

  const serviceIcons = {
    Followers: TbUsersPlus,
    Likes: CiHeart,
    "Mass DM": BiCommentDetail,
    Comments: FaRegComment,
    Reposts: FaRetweet,
    Views: FaEye,
    Mentions: FaAt,
  };

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
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
        console.log("data:", data);
        if (data.success) {
          setServices(data.data.services);
        } else {
          console.log(data.message || "Failed to fetch services");
        }
      } catch (err) {
        console.log("Error:", err || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [platform, authToken]);

  const handleServiceClick = (service) => {
    onServiceClick(service);
    setIsModalOpen("orderForm");
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white h-[70vh] overflow-auto text-[#101828] pb-4 rounded-[16px] border w-[90%] lgss:w-[30%] pt-3 flex flex-col gap-2 justify-start items-start">
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
          {loading ? (
            <div className="flex justify-center items-center w-full h-full">
              <ClipLoader color="#123abc" loading={loading} size={50} />
            </div>
          ) : (
            <ul className="flex flex-col text-left gap-2 text-[1rem]">
              {services?.map((service) => (
                <li
                  key={service.service}
                  onClick={() => handleServiceClick(service)}
                  className="cursor-pointer flex items-center"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecificService;
