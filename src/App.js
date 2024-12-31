import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreditCard from "./components/CreditCard/CreditCard";
import Index from "./components/HomePage/Index";
import UserFeedback from "./components/Feedback/UserFeedback";
import Indexes from "./components/ItemList/Indexes";
import Registration from "./components/UserRegistration/Registration";
import UserPaySuccess from "./components/PaymentSuccess/UserPaySuccess";


const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/creditcard" element={<CreditCard />} />
          <Route path="/feedback" element={<UserFeedback />} />
          <Route path="/itemlist" element={<Indexes />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/paymentsuccess" element={<UserPaySuccess />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
