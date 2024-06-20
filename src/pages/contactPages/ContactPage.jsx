import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { chat, email, logo, office, questionmark } from "../../assets";
import HomeSearch from "../../components/input/HomeSearch";
import ContactCard from "../../components/cards/ContactCard";
import SearchPlatforms from "../../components/modals/creatingOrder/SearchPlatforms";
import Cookies from "js-cookie";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserData = Cookies.get("userData");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-bg h-screen">
      <div className="w-[20%]">
        <Sidebar
          user={user}
          getInitials={getInitials}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <div className="flex flex-col lgss:w-[80%] z-0">
        <div className="lgss:hidden w-full px-[5%] flex justify-between items-center border-b-[1px] py-5">
          <img src={logo} alt="the-owulet logo" />
          <div className="gap-8 flex justify-center items-center text-secondary text-[24px]">
            <LuBell />
            <LuMenu onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <div className="w-full lgss:flex flex-col">
          <HomeSearch user={user} getInitials={getInitials} />
          <div className="flex flex-col justify-start items-start text-left px-[5%]">
            <h1 className="text-[2rem] font-semibold">Contact Us</h1>
            <p className="text-secondary">Reach out anytime</p>
            <div className="w-full flex flex-col gap-10 mt-8">
              <div className="flex flex-col lgss:flex-row gap-10">
                <ContactCard
                  title="Customer Support"
                  link="Visit help center"
                  img={questionmark}
                />
                <ContactCard
                  title="Chat with us"
                  link="Create a ticket"
                  img={chat}
                  to={"/contact/create-ticket"}
                />
              </div>
              <div className="flex flex-col lgss:flex-row gap-10">
                <ContactCard
                  title="Email us"
                  link="support@theowelttecom"
                  img={email}
                />
                <ContactCard
                  title="Our Office"
                  link="Plot 162A, Independence Layout, Enugu State"
                  img={office}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchPlatforms
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default ContactPage;
