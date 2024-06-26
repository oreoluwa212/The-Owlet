import React, { useEffect } from "react";
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

function SpecificService({ platform, onServiceClick, setIsModalOpen }) {
  const serviceIcons = {
    Followers: TbUsersPlus,
    Likes: CiHeart,
    "Mass DM": BiCommentDetail,
    Comments: FaRegComment,
    Reposts: FaRetweet,
    Views: FaEye,
    Mentions: FaAt,
  };

  const services = {
    Instagram: [
      "Followers",
      "Likes",
      "Mass DM",
      "Comments",
      "Reposts",
      "Views",
      "Mentions",
    ],
    Facebook: [
      "Followers",
      "Likes",
      "Mass DM",
      "Comments",
      "Reposts",
      "Views",
      "Mentions",
    ],
    Twitter: [
      "Followers",
      "Likes",
      "Mass DM",
      "Comments",
      "Reposts",
      "Views",
      "Mentions",
    ],
    Twitter: [
      "Followers",
      "Likes",
      "Mass DM",
      "Comments",
      "Reposts",
      "Views",
      "Mentions",
    ],
    Pinterest: [
      "Followers",
      "Likes",
      "Mass DM",
      "Comments",
      "Reposts",
      "Views",
      "Mentions",
    ],
    LinkedIn: [
      "Followers",
      "Likes",
      "Mass DM",
      "Comments",
      "Reposts",
      "Views",
      "Mentions",
    ],
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `https://theowletapp.com/server/api/v1/categories/${platform.id}/services`
        );
        const data = await response.json();
        if (data.success) {
          setServices(data.data.services);
        } else {
          console.log(data.message || "Failed to fetch services");
        }
      } catch (err) {
        console.log(err.message || "Something went wrong");
      }
    };

    fetchServices();
  }, [platform]);

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
          <h2 className="text-[16px] font-semibold">{platform} Services</h2>
          <ul className="flex flex-col text-left gap-2 text-[1rem]">
            {services[platform].map((service) => (
              <li
                key={service}
                onClick={() => handleServiceClick(service)}
                className="cursor-pointer flex items-center"
              >
                {React.createElement(serviceIcons[service], {
                  className: "mr-2",
                })}
                {platform} {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpecificService;
