import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreditCard.css";

const CreditCard = () => {
  const navigate = useNavigate();
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const currentYear = new Date().getFullYear();
  const minCardMonth = cardYear === currentYear.toString() ? new Date().getMonth() + 1 : 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardName || cardNumber || cardMonth || cardYear || cardCvv === "true") {
      navigate("/paymentsuccess");
    }
    else {
      alert("Please fill all the details");
    }
  };

  return (
    <div className="credit-card-wrapper">
      <div className={`card-item ${isCardFlipped ? "-active" : ""}`}>
        <div className="card-item__side -front">
          <div className="card-item__cover"></div>

          <div className="card-item__wrapper">
            <div className="card-item__top">
              <img
                src="./images/chip.png"
                alt="Chip"
                className="card-item__chip"
              />
            </div>

            <div className="card-item__content">
              <div className="card-item__info">
                <div className="card-item__holder">Card Holder</div>
                <div className="card-item__name">{cardName || "Full Name"}</div>
                &nbsp;
                <div className="card-input">{cardNumber || "#### #### #### ####"}</div>

              </div>
              <div className="card-item__date">
                <div className="card-item__dateTitle">Expires</div>
                <div className="card-item__dateItem">
                  {cardMonth || "MM"} / {cardYear ? cardYear.slice(2, 4) : "YY"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-item__side -back">
          <div className="card-item__cvv">
            <div className="card-item__cvvTitle">CVV</div>
            <div className="card-item__cvvBand">
              {Array.from(cardCvv).map((_, index) => (
                <span key={index}>*</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <form className="card-form" onSubmit={handleSubmit}>

        <div className="card-input">
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
            autoComplete="off"
          />
        </div>

        <div className="card-input">
          <label htmlFor="card-name">Card Holder</label>
          <input
            type="text"
            id="card-name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            maxLength={20}
            autoComplete="off"
          />
        </div>

        <div className="card-form__row">
          <div className="card-form__group">
            <label htmlFor="card-month">Expiration Date</label>
            <select
              id="card-month"
              value={cardMonth}
              onChange={(e) => setCardMonth(e.target.value)}
            >
              <option value="" disabled>
                Month
              </option>
              {[...Array(12).keys()].map((month) => {
                const value = month + 1;
                return (
                  <option key={value} value={value < 10 ? `0${value}` : value} disabled={value < minCardMonth}>
                    {value < 10 ? `0${value}` : value}
                  </option>
                );
              })}
            </select>
            <select
              id="card-year"
              value={cardYear}
              onChange={(e) => setCardYear(e.target.value)}
            >
              <option value="" disabled>
                Year
              </option>
              {[...Array(12).keys()].map((_, index) => {
                const year = currentYear + index;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="card-form__col -cvv">
            <div className="card-input">
              <label htmlFor="card-cvv">CVV</label>
              <input
                type="text"
                id="card-cvv"
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
                onFocus={() => setIsCardFlipped(true)}
                onBlur={() => setIsCardFlipped(false)}

                maxLength="3"
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="card-form__button">Submit</button>
      </form>
    </div>
  );
};

export default CreditCard;
