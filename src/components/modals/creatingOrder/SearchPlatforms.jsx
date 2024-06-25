import React from "react";
import {
  Facebook,
  instagram,
  linkedin,
  pinterest,
  twitter,
  tiktok,
  whatsapp,
  reddit,
  sound,
  spotify,
  telegram,
} from "../../../assets";
import SearchComp from "./SearchComp";

function SearchPlatforms({ setIsModalOpen, isModalOpen, onPlatformClick }) {
  if (!isModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handlePlatformClick = (platform) => {
    onPlatformClick(platform.name);
    setIsModalOpen(false);
  };

  const platforms = [
    { name: "Instagram", icon: instagram },
    { name: "Facebook", icon: Facebook },
    { name: "Twitter", icon: twitter },
    { name: "Tiktok", icon: tiktok },
  ];
  const allPlatforms = [
    { name: "Whatsapp", icon: whatsapp },
    { name: "Pinterest", icon: pinterest },
    { name: "Linkedin", icon: linkedin },
    { name: "Soundcloud", icon: sound },
    { name: "Telegram", icon: telegram },
    { name: "Spotify", icon: spotify },
    { name: "Reddit", icon: reddit },
  ];

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white h-fit pb-4 rounded-[16px] border w-[60%] lgss:w-[30%] pt-3 flex flex-col justify-start items-start">
        <SearchComp placeholder={"Search for any platform"} />
        <ul className="flex flex-col text-left px-5 gap-2 pt-4 text-[1rem] py-3">
          <li className="text-grey font-medium">Most popular</li>
          {platforms.map((platform) => (
            <li
              key={platform.name}
              onClick={() => handlePlatformClick(platform)}
              className="flex cursor-pointer gap-2 items-center"
            >
              <img className="h-6" src={platform.icon} alt={platform.name} />
              {platform.name}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col text-left px-5 gap-2 pt-4 text-[1rem] border-t-[1px] w-full">
          <li className="text-grey font-medium">All platforms</li>
          {allPlatforms.map((platform) => (
            <li
              key={platform.name}
              onClick={() => handlePlatformClick(platform)}
              className="flex cursor-pointer gap-2 items-center"
            >
              <img className="h-6" src={platform.icon} alt={platform.name} />
              {platform.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchPlatforms;
