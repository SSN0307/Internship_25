import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Discover Rare & Exclusive Items</h1>
        <p>Join the most exciting bidding experience online.</p>
        <button className="cta-button">Start Bidding</button>
      </div>
      

      <div className="featured-auctions">
        <div className="auction-card">
          <img src="/photos/painting.jpg" alt="Rare Painting" />
          <h3>Rare Painting</h3>
          <p>Current Bid: $1,200</p>
        </div>
        <div className="auction-card">
          <img src="/photos/shoes.jpg" alt="Limited Edition Sneaker" />
          <h3>Limited Edition Sneaker</h3>
          <p>Current Bid: $750</p>
        </div>
        <div className="auction-card">
          <img src="/photos/watch.jpg" alt="Vintage Watch" />
          <h3>Vintage Watch</h3>
          <p>Current Bid: $900</p>
        </div>
      </div>
    </div>
    

    
  );
};

export default Home;
