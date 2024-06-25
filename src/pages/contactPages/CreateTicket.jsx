import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { logo } from "../../assets";
import { LuBell, LuMenu } from "react-icons/lu";
import HomeSearch from "../../components/input/HomeSearch";
import CreateOrderBtn from "../../components/buttons/CreateOrderBtn";
import CommonH1 from "../../components/CommonH1";
import FormInput from "../../components/input/FormInput";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import TicketCards from "../../components/cards/TicketCards";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTicket = ({ authToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [pendingTickets, setPendingTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");
  const [pendingCount, setPendingCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    uploads: [],
  });

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
    const fetchTicketHistory = async () => {
      try {
        const response = await axios.get(
          "https://theowletapp.com/server/api/v1/tickets/history/10",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.data.success) {
          const { pending, resolved } = response.data.data;
          setPendingTickets(pending.data);
          setResolvedTickets(resolved.data);
          setPendingCount(pending.total);
          setResolvedCount(resolved.total);
        } else {
          toast.error(
            response.data.message || "Failed to fetch ticket history"
          );
          console.error(
            "Failed to fetch ticket history:",
            response.data.message
          );
        }
      } catch (error) {
        toast.error("Error fetching ticket history");
        console.error("Error fetching ticket history:", error);
      }
    };

    fetchTicketHistory();
  }, [authToken]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, uploads: [...formData.uploads, ...files] });
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = formData.uploads.filter((_, i) => i !== index);
    setFormData({ ...formData, uploads: updatedFiles });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.subject || !formData.description) {
      toast.error("Please fill out all required fields.");
      return;
    }

    try {
      const formDataForSubmit = new FormData();
      formDataForSubmit.append("subject", formData.subject);
      formDataForSubmit.append("description", formData.description);
      formData.uploads.forEach((file) => {
        formDataForSubmit.append("uploads", file);
      });

      const response = await axios.post(
        "https://theowletapp.com/server/api/v1/create/ticket",
        formDataForSubmit,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Ticket created successfully!");
        fetchTicketHistory();
        setFormData({ subject: "", description: "", uploads: [] });
      } else {
        toast.error("Failed to create ticket");
        console.error("Failed to create ticket:", response.data.message);
      }
    } catch (error) {
      toast.error("Error creating ticket");
      console.error("Error creating ticket:", error);
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="max-w-full flex flex-col lgss:flex-row">
      <ToastContainer />

      <div className="w-[20%]">
        <Sidebar
          user={user}
          getInitials={getInitials}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
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
          <div className="w-full px-[5%]">
            <div className="flex lgss:flex-row flex-col gap-5 w-full h-full justify-between py-7">
              <div className="bg-white lgss:w-[45%] lgss:border shadow-md pt-6 rounded-[12px] flex flex-col justify-start items-start text-left h-fit py-7">
                <CommonH1 title="Create a ticket" />
                <div className="w-full px-[5%] pt-4">
                  <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-7"
                  >
                    <FormInput
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to report?"
                      id="subject"
                      label="Subject"
                      textarea={false}
                    />
                    <FormInput
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Please describe the issue in detail"
                      id="description"
                      label="Description"
                      textarea={true}
                    />
                    <div className="flex flex-col gap-2">
                      {/* <FormInput
                        name="uploads"
                        id="uploads"
                        label="Upload File"
                        upload={true}
                        multiple
                        onChange={handleFileChange}
                      /> */}
                      <input
                        type="file"
                        id="uploads"
                        name="uploads"
                        className="border rounded-md py-2 px-3 bg-gray-100"
                        multiple
                      />
                      {formData.uploads.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {formData.uploads.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center bg-gray-200 rounded-md px-3 py-2"
                            >
                              <p className="text-sm truncate">{file.name}</p>
                              <button
                                type="button"
                                onClick={() => handleRemoveFile(index)}
                                className="ml-2 text-gray-600 hover:text-gray-800"
                              >
                                <AiOutlineClose className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <CreateOrderBtn title="Submit ticket" />
                  </form>
                </div>
              </div>
              <div className="lgss:w-[55%] h-fit py-5 bg-white border">
                <CommonH1 title="Tickets" />
                <div className="flex flex-col px-[5%] pt-5">
                  <div className="w-full flex lgss:flex-row flex-col justify-between gap-4">
                    <div className="w-[30%] flex text-[14px]">
                      <button
                        className={`bg-transparent border-b-2 px-3 inline-flex gap-2 py-2 ${
                          activeTab === "pending"
                            ? "text-primary border-b-primary"
                            : "text-secondary border-b-secondary border-b-[1px]"
                        }`}
                        onClick={() => setActiveTab("pending")}
                        disabled={activeTab === "pending"}
                      >
                        Pending
                        <span
                          className={`px-2 font-semibold rounded-full ${
                            activeTab === "pending"
                              ? "border-primary border-[1px] bg-pinkBg"
                              : "bg-[#F9FAFB] border-[#EAECF0] border-[1px]"
                          }`}
                        >
                          {pendingCount}
                        </span>
                      </button>
                      <button
                        className={`bg-transparent border-b-2 px-3 inline-flex gap-2 py-2 ${
                          activeTab === "resolved"
                            ? "text-primary border-b-primary"
                            : "text-secondary border-b-secondary border-b-[1px]"
                        }`}
                        onClick={() => setActiveTab("resolved")}
                        disabled={activeTab === "resolved"}
                      >
                        Resolved
                        <span
                          className={`px-2 font-semibold rounded-full ${
                            activeTab === "resolved"
                              ? "bg-pinkBg border-[1px] border-primary"
                              : "bg-[#F9FAFB] border-[#EAECF0] border-[1px]"
                          }`}
                        >
                          {resolvedCount}
                        </span>
                      </button>
                    </div>
                    <div className="lgss:w-[50%] w-full">
                      <div className="relative w-full">
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
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex flex-col gap-6 w-full">
                      {activeTab === "pending" &&
                        pendingTickets.map((ticket, index) => (
                          <TicketCards
                            key={index}
                            complainHead={ticket.subject}
                            user={ticket.created_at}
                            complaint={ticket.description}
                            time={ticket.created_at}
                            ticketId={ticket.ticket_id}
                          />
                        ))}
                      {activeTab === "resolved" &&
                        resolvedTickets.map((ticket, index) => (
                          <TicketCards
                            key={index}
                            complainHead={ticket.subject}
                            user={ticket.created_at}
                            complaint={ticket.description}
                            time={ticket.created_at}
                            ticketId={ticket.ticket_id}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
