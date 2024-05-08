import { LiaTimesSolid } from "react-icons/lia"

function HomeFilters({ name }) {
  return (
    <div className="bg-white border px-3 rounded-[8px] flex gap-2 items-center">
      <h3 className="font-semibold">{name}</h3>
      <LiaTimesSolid/>
    </div>
  )
}

export default HomeFilters