import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Reach out to us!</p>
      <div className="contact-details">
        <p><strong>Email:</strong> support@auctionplatform.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Address:</strong> 123 Auction St, Marketplace City</p>
      </div>
    </div>
  );
};

export default Contact;
