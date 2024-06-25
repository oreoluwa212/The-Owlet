import { CiSearch } from "react-icons/ci";

function SearchComp({ placeholder }) {
  return (
    <div className="flex w-full justify-center items-center gap-2 text-[18px] border-b-2 mb-2">
      <CiSearch />
      <input className="outline-none p-2 w-[90%] placeholder:text-[14px]" type="text" placeholder={placeholder} />
    </div>
  );
}

export default SearchComp;
