import { NavLink, useLocation } from "react-router-dom";
import { PiHouseSimpleLight } from "react-icons/pi";
import { GoInbox } from "react-icons/go";
import CustomIcon from "./icons/CustomIcon";
import { LuWallet2 } from "react-icons/lu";
import { AiOutlineQuestionCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { CiMail, CiSettings } from "react-icons/ci";

const general = [
  {
    name: "Home",
    route: "/",
    icon: <PiHouseSimpleLight />,
  },
  {
    name: "Services",
    route: "/services",
    icon: <CustomIcon />,
  },
  {
    name: "Orders",
    route: "/orders",
    icon: <GoInbox />,
  },
  {
    name: "Fund account",
    route: "/fund",
    icon: <LuWallet2 />,
  },
  {
    name: "Affiliates Center",
    route: "/affiliates",
    icon: <AiOutlineUsergroupAdd />,
  },
];
const help = [
  {
    name: "Help & FAQ",
    route: "/help",
    icon: <AiOutlineQuestionCircle />,
  },
  {
    name: "Contact us",
    route: "/contact",
    icon: <CiMail />,
  },
  {
    name: "Settings",
    route: "/settings",
    icon: <CiSettings />,
  },
];

function NavLinks() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <nav className="w-full h-full flex flex-col">
        <ul className="border-b-[1px] py-4">
          <h1 className="text-center w-1/2 uppercase text-secondary font-medium">
            general
          </h1>
          {general.map((link) => (
            <li key={link.route}>
              <NavLink
                to={link.route}
                className={`flex flex-row items-center lgss:mb-0 mb-3 w-[90%] text-[.8rem] px-8 mx-auto ${
                  pathname === link.route
                    ? "rounded-lg bg-[#FEF3F2] text-primary py-1 lgss:w-[80%] w-[200px] lgss:pl-4"
                    : pathname.includes(link.route)
                    ? ""
                    : ""
                }`}
              >
                <div className="flex justify-center items-center gap-3">
                  {link.icon}
                  <span className="text-[1.1rem] lgss:text-[.8rem] font-semibold lgss:leading-6 leading-7 whitespace-nowrap">
                    {link.name}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="py-4">
          <h1 className="text-center w-1/2 uppercase text-secondary font-medium">
            help
          </h1>
          {help.map((link) => (
            <li key={link.route}>
              <NavLink
                to={link.route}
                className={`flex flex-row items-center lgss:mb-0 mb-3 w-[90%] text-[.8rem] px-8 mx-auto ${
                  pathname === link.route
                    ? "rounded-lg bg-[#FEF3F2] text-primary py-1 lgss:w-[80%] w-[200px] lgss:pl-4"
                    : pathname.includes(link.route)
                    ? "rounded-lg bg-[#FEF3F2] text-primary py-1 lgss:w-[80%] w-[200px] lgss:pl-4"
                    : ""
                }`}
              >
                <div className="flex justify-center items-center gap-3">
                  {link.icon}
                  <span className="text-[1.1rem] lgss:text-[.8rem] font-semibold lgss:leading-6 leading-7 whitespace-nowrap">
                    {link.name}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() => navigate("/signin")}
          className="flex gap-5 text-[18px] text-[#B82323] items-center  font-medium pl-12 h-[40%] w-full"
        >
          Sign Out
          <HiOutlineLogout />
        </button>
      </nav>
    </div>
  );
}

export default NavLinks;
