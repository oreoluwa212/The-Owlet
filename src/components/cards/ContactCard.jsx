import { FaArrowRight } from "react-icons/fa6";

function ContactCard({ title, link, img }) {
  return (
    <div className="bg-white shadow-sm border-[1px] rounded-[8px] h-[150px] lgss:w-[50%] flex justify-between items-center px-6">
      <div className="flex flex-col gap-6">
        <h3 className="text-[26px] font-bold">{title}</h3>
        <div className="flex gap-3 font-semibold text-primary  items-center cursor-pointer">
          <a className="text-left text-[18px] underline">{link}</a>
          <span>
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div className="bg-[#F6F6F6] p-4 rounded-full flex justify-center items-center">
        {img && <img src={img} alt="Card image" className="h-10 w-10" />}
      </div>
    </div>
  );
}

export default ContactCard