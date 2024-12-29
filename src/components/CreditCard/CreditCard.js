import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreditCard.css';

const CreditCard = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/paymentsuccess'); // Navigate to payment success page
  };

  return (
    <div className="credit-card" id="credit-card">
      <h2>Credit Card Information</h2>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-number">Card Number:</label>
        <input type="text" id="card-number" required />
        
        <label htmlFor="card-name">Holder Name:</label>
        <input type="text" id="card-name" required />
        
        <label htmlFor="expiration-date">Expiration Date:</label>
        <input type="text" id="expiration-date" placeholder="MM/YY" required />
        
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" required />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreditCard;
