import { linkedin, pinterest, reddit, sound, spotify, telegram, whatsapp } from "../../../assets";
import SearchComp from "./SearchComp";

function SpecificService({ setIsModalOpen, isModalOpen }) {
  if (!isModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white h-fit pb-4 rounded-[16px] border w-[30%] pt-3 flex flex-col justify-start items-start">
        <SearchComp placeholder={"Search for any platform"} />
        <ul className="flex flex-col text-left px-5 gap-2 pt-6 text-[1.2rem]">
          <li className="text-grey font-medium">All platforms</li>
          <li className="flex gap-2 items-center">
            <img className="h-6" src={whatsapp} alt="whatsapp" /> Whatsapp
          </li>
          <li className="flex gap-2 items-center">
            <img src={pinterest} alt="h-6" /> Pinterest
          </li>
          <li className="flex gap-2 items-center">
            <img src={linkedin} alt="" />
            Linkedin
          </li>
          <li className="flex gap-2 items-center">
            <img src={sound} alt="" />
            Soundcloud
          </li>
          <li className="flex gap-2 items-center">
            <img src={telegram} alt="" />
            Telegram
          </li>
          <li className="flex gap-2 items-center">
            <img src={spotify} alt="" />
            Spotify
          </li>
          <li className="flex gap-2 items-center">
            <img src={reddit} alt="" />
            Reddit
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpecificService;
