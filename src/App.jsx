import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServicesPage from "./pages/ServicesPage";
import OrderPage from "./pages/OrderPage";
import FundPage from "./pages/FundPage";
import AffiliatePage from "./pages/AffiliatePage";
import ContactPage from "./pages/contactPages/ContactPage";
import CreateTicket from "./pages/contactPages/CreateTicket";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [authToken, setAuthToken] = useState(null);

  const fetchAuthToken = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const authParam = urlParams.get("auth");

    if (authParam) {
      localStorage.setItem("token", authParam);
      setAuthToken(authParam);
      history.replaceState(null, "", window.location.pathname);
    } else {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthToken(token);
      }
    }
  };

  useEffect(() => {
    fetchAuthToken();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage authToken={authToken} />} />
        <Route path="/orders" element={<OrderPage authToken={authToken} />} />
        <Route
          path="/services"
          element={<ServicesPage authToken={authToken} />}
        />
        <Route path="/fund" element={<FundPage authToken={authToken} />} />
        <Route
          path="/affiliates"
          element={<AffiliatePage authToken={authToken} />}
        />
        <Route
          path="/contact"
          element={<ContactPage authToken={authToken} />}
        />
        <Route
          path="/contact/create-ticket"
          element={<CreateTicket authToken={authToken} />}
        />
        <Route
          path="/settings"
          element={<SettingsPage authToken={authToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
