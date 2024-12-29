import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    country: "",
    phone: "",
    password: "",
    confirmPassword: "",
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log("Form Submitted:", formData);

      alert("Registration Successful! please login");
      navigate("/");
    }
  
  



  };
  return (
    <div className="registration">
      <h1>Registration Form</h1>
      <h2>Register Here...</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <img
            className="avatar"
            src="https://th.bing.com/th/id/OIP.xVNJ8VpYO02_odVFhqW5rgHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="avatar"
          />
          <br />
          <label>Full Name:</label>
          <br />
          <input
            type="text"
            name="fullName"
            placeholder="Name.."
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email Address.."
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label>Address :</label>
          <br />
          <input
            type="address"
            name="address"
            value={formData.address}
             placeholder="Address.."
            onChange={handleChange}
            required
          />
          <br />
          <label>Country:</label>
          <br />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              --Select Country--
            </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="England">England</option>
          </select>
          <br />
          <label>Phone Number:</label>
          <br />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number.."
            value={formData.phone}
            onChange={handleChange}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="checkbox"
            required
          />{" "}
          I agree to Terms & Conditions
          <br />
          <button onClick={ handleSubmit} className="btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
