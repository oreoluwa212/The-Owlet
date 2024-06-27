import React, { useEffect, useState } from "react";
import SearchComp from "./SearchComp";
import { platformImages } from "../../../assets";
import ClipLoader from "react-spinners/ClipLoader";

function SearchPlatforms({ setIsModalOpen, isModalOpen, onPlatformClick }) {
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const mostPopularPlatforms = [
    "Youtube",
    "Instagram",
    "Facebook",
    "Twitter",
    "LinkedIn",
  ];

  useEffect(() => {
    const fetchPlatforms = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://theowletapp.com/server/api/v1/categories"
        );
        const data = await response.json();
        if (data.success) {
          setPlatforms(data.data);
        } else {
          setError(data.message || "Failed to fetch platforms");
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  if (!isModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handlePlatformClick = (platform) => {
    onPlatformClick(platform);
    setIsModalOpen("specificService");
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white h-fit pb-4 rounded-[16px] border w-[90%] lgss:w-[30%] pt-3 flex flex-col justify-start items-start">
        <SearchComp placeholder={"Search for any platform"} />
        {loading ? (
          <div className="flex justify-center items-center w-full h-full">
            <ClipLoader color="#123abc" loading={loading} size={50} />
          </div>
        ) : (
          <>
            {error && <div className="text-red-500 px-5 py-3">{error}</div>}
            <ul className="flex flex-col text-left px-5 gap-2 pt-4 text-[1rem] py-3">
              <li className="text-grey font-medium">Most popular</li>
              {platforms
                .filter((platform) =>
                  mostPopularPlatforms.includes(platform.name)
                )
                .map((platform) => (
                  <li
                    key={platform.id}
                    onClick={() => handlePlatformClick(platform)}
                    className="flex cursor-pointer gap-2 items-center"
                  >
                    <img
                      className="h-6"
                      src={platformImages[platform.name]}
                      alt={platform.name}
                    />
                    {platform.name}
                  </li>
                ))}
            </ul>
            <ul className="flex flex-col text-left px-5 gap-2 pt-4 text-[1rem] border-t-[1px] w-full">
              <li className="text-grey font-medium">All platforms</li>
              {platforms.map((platform) => (
                <li
                  key={platform.id}
                  onClick={() => handlePlatformClick(platform)}
                  className="flex cursor-pointer gap-2 items-center"
                >
                  <img
                    className="h-6"
                    src={platformImages[platform.name]}
                    alt={platform.name}
                  />
                  {platform.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchPlatforms;
