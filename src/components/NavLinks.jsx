import { NavLink, useLocation } from "react-router-dom";
import { PiHouseSimpleLight } from "react-icons/pi";
import { GoInbox } from "react-icons/go";
import CustomIcon from "./icons/CustomIcon";
import { LuWallet2 } from "react-icons/lu";
import { AiOutlineQuestionCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
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
        <ul className="border-b-[1px] py-3">
          <h1 className="text-center w-1/2 uppercase text-secondary font-medium pb-1">
            general
          </h1>
          {general.map((link) => (
            <li key={link.route}>
              <NavLink
                to={link.route}
                className={`flex flex-row items-center mb-2 w-[90%] px-8 mx-auto ${
                  pathname === link.route
                    ? "rounded-lg bg-[#FEF3F2] text-primary py-2 lgss:w-[80%] w-[200px] pl-4"
                    : pathname.includes(link.route)
                    ? ""
                    : ""
                }`}
              >
                <div className="flex justify-center items-center gap-3">
                  {link.icon}
                  <span className="text-[1.1rem] font-semibold leading-7 whitespace-nowrap">
                    {link.name}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="pt-4">
          <h1 className="text-center w-1/2 uppercase text-secondary font-medium pb-1">
            help
          </h1>
          {help.map((link) => (
            <li key={link.route}>
              <NavLink
                to={link.route}
                className={`flex flex-row text-[0.8rem] items-center mb-2 w-[90%] px-8 mx-auto ${
                  pathname === link.route
                    ? "rounded-lg bg-[#FEF3F2] text-primary py-[.5rem] lgss:w-[80%] w-[200px] pl-4"
                    : pathname.includes(link.route)
                    ? "rounded-lg bg-red bg-opacity-65 text-white lgss:w-[220px] pl-4 mx-auto w-full"
                    : ""
                }`}
              >
                <div className="flex justify-center items-center gap-2">
                  {link.icon}
                  <span className="text-[1.1rem] font-semibold leading-7 whitespace-nowrap">
                    {link.name}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavLinks;
