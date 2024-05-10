import { AiOutlineSearch } from "react-icons/ai";

function HomeSearchInputWhite() {
  return (
    <div className="relative lgss:w-[30%] w-full">
      <input
        type="text"
        className="w-full bg-white border h-12 rounded-[8px] px-10 outline-none"
        placeholder="Search"
        name="search"
        id="search"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <AiOutlineSearch className="text-gray-400 text-[22px]" />
      </div>
    </div>
  );
}

export default HomeSearchInputWhite;