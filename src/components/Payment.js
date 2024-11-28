import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = ({ cart, totalAmount }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
    const navigate = useNavigate();

    const handlePayment = () => {
    setTimeout(() => {
      setPaymentSuccess(true);
      alert("Payment successful!");
    }); 
    
  };

  const handleBack = () => {
    navigate("/cart");
}
  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <div>
        <h3>Order Summary</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h4>Total: ${totalAmount}</h4>
      </div>
      
    <div className="payment-actions">
      <button onClick={handleBack} className="back-button">
          Back to Cart
        </button>
      <button onClick={handlePayment} className="payment-button">
        Pay Now
      </button>
    </div>
    {paymentSuccess && <p className="response">Thank you for your purchase!</p>}

    </div>
  );
};

export default Payment;
