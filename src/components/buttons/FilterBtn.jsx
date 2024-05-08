import { IoFilter } from "react-icons/io5";

function FilterBtn({ name }) {
  return (
    <div className="bg-white border px-3 rounded-[8px] flex gap-2 items-center">
      <IoFilter />
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
}

export default FilterBtn;
