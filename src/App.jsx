import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ServicesPage from "./pages/ServicesPage";
import OrderPage from "./pages/OrderPage";
import FundPage from "./pages/FundPage";
import AffiliatePage from "./pages/AffiliatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/fund" element={<FundPage />} />
        <Route path="/affiliates" element={<AffiliatePage />} />
        <Route path="/help" element={<AffiliatePage />} />
        <Route path="/contact" element={<AffiliatePage />} />
        <Route path="/settings" element={<AffiliatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
