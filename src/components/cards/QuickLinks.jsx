import { play, quicklinkimg } from "../../assets";

function QuickLinks() {
  return (
    <div className="relative flex justify-center cursor-pointer">
      <img
        src={quicklinkimg}
        alt="quick links image"
        className="pt-4 rounded-[8px]"
      />
      <img
        src={play}
        alt="play button"
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export default QuickLinks;
