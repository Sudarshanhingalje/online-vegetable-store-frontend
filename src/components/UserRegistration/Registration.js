import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    birthDate: "",
    gender: "",
    address: "",
    country: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Successful! Please log in.");
    navigate("/");
  };

  return (
    <div className="registration">
      <div className="container">
        <h2>Registration Form</h2>
        <img className="register-image" src="/images/register.jpg" alt="Register" />
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Enter mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select country
            </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>

          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            placeholder="Enter postal code"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
