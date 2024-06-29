import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { LuBell, LuMenu } from "react-icons/lu";
import { logo } from "../assets";
import HomeSearch from "../components/input/HomeSearch";
import CreateOrderBtn from "../components/buttons/CreateOrderBtn";
import FormInput from "../components/input/FormInput";
import CommonH1 from "../components/CommonH1";
import SearchPlatforms from "../components/modals/creatingOrder/SearchPlatforms";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { FiCopy } from "react-icons/fi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormSelect from "../components/input/FormSelect";

const generateRandomApiKey = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const SettingsPage = ({ authToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiKey, setApiKey] = useState(generateRandomApiKey());
  const [user, setUser] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [timeZones, setTimeZones] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://theowletapp.com/server/api/v1/users/analytics",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        setUser(response.data.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [authToken]);

  useEffect(() => {
    const fetchTimeZones = async () => {
      try {
        const response = await axios.get(
          "https://theowletapp.com/server/api/v1/time/zone",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Failed to fetch time zones");
        }

        if (response.data && Array.isArray(response.data.data)) {
          setTimeZones(
            response.data.data.map((tz) => ({
              value: tz.id,
              label: tz.timezone,
            }))
          );
        } else {
          console.error(
            "Invalid response format for time zones:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching time zones:", error);
      }
    };

    fetchTimeZones();
  }, [authToken]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(apiKey)
      .then(() => {
        toast.success("API Key copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy API Key");
      });
  };

  const handleGenerateNewKey = () => {
    const newApiKey = generateRandomApiKey();
    setApiKey(newApiKey);
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (phone.length > 11) {
      toast.error("Phone number cannot exceed 11 digits");
      return;
    }

    try {
      const response = await axios.put(
        "https://theowletapp.com/server/api/v1/users/update/profile",
        {
          lastname: lastName,
          firstname: firstName,
          phone: phone,
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to update profile");
      }

      toast.success("Profile updated successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://theowletapp.com/server/api/v1/users/change/password",
        {
          oldPassword: currentPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to change password");
      }

      toast.success("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("Failed to change password");
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 11) {
      setPhone(input);
    }
  };

  const handleTimezoneChange = async (e) => {
    const timezoneId = e.target.value;
    setSelectedTimezone(timezoneId);
  };

  const handleTimezoneUpdate = async () => {
    try {
      const response = await axios.put(
        "https://theowletapp.com/server/api/v1/users/update/time_zone",
        {
          timezone_id: selectedTimezone,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to update timezone");
      }

      toast.success("Timezone updated successfully!");
    } catch (error) {
      console.error("Error updating timezone:", error);
      toast.error("Failed to update timezone");
    }
  };

  return (
    <div className="max-w-full flex flex-col lgss:flex-row bg-bg">
      <ToastContainer />
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
          <div className="flex lgss:flex-row flex-col gap-5 w-full h-screen justify-between py-12 px-[5%]">
            <div className="lgss:bg-white lgss:w-[50%] lgss:border shadow-md pt-6 rounded-[12px] flex flex-col justify-start items-start h-fit py-3 text-left">
              <CommonH1 title="Edit your profile" />
              <div className="w-full px-[5%] pt-4">
                <form
                  onSubmit={handleProfileUpdate}
                  className="flex flex-col gap-3 w-full"
                >
                  <h3 className="font-semibold text-[14px] text-[#344054]">
                    PERSONAL INFORMATION
                  </h3>
                  <div className="w-full flex gap-5">
                    <div className="w-1/2">
                      <FormInput
                        name="first name"
                        placeholder="Michael"
                        id="search"
                        label="First name"
                        textarea={false}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        name="last name"
                        placeholder="Pearson"
                        id="lname"
                        label="Last name"
                        textarea={false}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="w-full flex gap-5 mb-3">
                    <div className="w-1/2">
                      <FormInput
                        name="email"
                        placeholder="mike@gmail.com"
                        id="email"
                        label="Email"
                        textarea={false}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        name="phone number"
                        placeholder="07012345678"
                        id="pnumber"
                        label="Phone number"
                        textarea={false}
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <CreateOrderBtn title="Save changes" type="submit" />
                  </div>
                </form>
                <form
                  onSubmit={handleChangePassword}
                  className="flex flex-col gap-3 w-full pt-5"
                >
                  <h3 className="font-semibold text-[14px] text-[#344054]">
                    CHANGE PASSWORD
                  </h3>

                  <div className="w-full flex gap-5">
                    <div className="w-1/2">
                      <FormInput
                        name="password"
                        placeholder="Enter current password"
                        id="current-password"
                        label="Current Password"
                        textarea={false}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        name="new password"
                        placeholder="Enter new password"
                        id="new-password"
                        label="New Password"
                        textarea={false}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <CreateOrderBtn title="Save changes" type="submit" />
                  </div>
                </form>
              </div>
            </div>

            <div className="lgss:w-[50%] w-full flex flex-col gap-10">
              <div className="lgss:bg-white lgss:border shadow-md pt-6 rounded-[12px] flex flex-col justify-start items-start h-fit py-3 text-left">
                <div className="w-full border-b-2 px-5 pb-1 flex items-center justify-between text-[18px] ">
                  <h1 className="font-bold">Time zone</h1>
                  <PiDotsThreeOutlineVerticalBold />
                </div>
                <div className="w-full">
                  <div className="w-full px-[5%] py-4">
                    <FormSelect
                      id="timeZoneSelect"
                      name="timeZone"
                      label="Select Time Zone"
                      options={timeZones}
                      value={selectedTimezone} 
                      onChange={handleTimezoneChange}
                    />
                  </div>
                  <hr />
                  <div className="px-[5%] py-4">
                    <CreateOrderBtn
                      title="Save changes"
                      onClick={handleTimezoneUpdate}
                    />
                  </div>
                </div>
              </div>
              <div className="lgss:bg-white lgss:border shadow-md pt-6 rounded-[12px] flex flex-col justify-start items-start h-fit py-3 text-left">
                <div className="w-full border-b-2 px-5 pb-1 flex items-center justify-between text-[18px] ">
                  <h1 className="font-bold">API Key</h1>
                  <PiDotsThreeOutlineVerticalBold />
                </div>
                <div className="w-full">
                  <div className="w-full px-[5%] py-4">
                    <FormInput
                      name="api-key"
                      value={apiKey}
                      placeholder="API Key"
                      select={false}
                      textarea={false}
                      icon={<FiCopy />}
                      onIconClick={handleCopy}
                    />
                  </div>
                  <hr />
                  <div className="px-[5%] py-4">
                    <CreateOrderBtn
                      title="Generate new key"
                      onClick={handleGenerateNewKey}
                    />
                  </div>
                </div>
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

export default SettingsPage;
