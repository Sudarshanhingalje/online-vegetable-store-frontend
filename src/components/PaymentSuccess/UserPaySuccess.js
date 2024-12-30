import React from "react";
import "./UserPaymentSuccess.css";
import { useNavigate } from "react-router-dom";
 


const UserPaySuccess = () => {
  const navigate = useNavigate();

const handalhome = () => {
  navigate("/");
};

return (
  <div className="payment-success">
    <h1>Payment Successful!</h1>
    <h1>धन्यवाद, तुमचे भुगतान यशस्वी झाले आहे</h1>
    <p>Thank you for your payment. Your transaction has been completed.</p>
    <button onClick={handalhome} className="btn">Continue Shopping</button>
  </div>
);
};

export default UserPaySuccess;
