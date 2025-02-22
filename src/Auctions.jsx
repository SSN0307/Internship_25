import React, { useState } from 'react';
import './Auctions.css'; // Link your CSS file here

const Auctions = () => {
  const [auctionItems, setAuctionItems] = useState([
    { id: 1, name: 'Rare Painting', currentBid: 1200 },
    { id: 2, name: 'Limited Edition Sneaker', currentBid: 750 },
    { id: 3, name: 'Vintage Watch', currentBid: 900 },
  ]);

  const handleBid = (itemId, newBid) => {
    setAuctionItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && newBid > item.currentBid
          ? { ...item, currentBid: newBid }
          : item
      )
    );
  };

  return (
    <div className="auction-container">
      <h1>Live Auctions</h1>
      <div className="auction-list">
        {auctionItems.map((item) => (
          <div key={item.id} className="auction-item">
            <h2>{item.name}</h2>
            <p>Current Bid: ${item.currentBid}</p>
            <BidInput itemId={item.id} currentBid={item.currentBid} onBid={handleBid} />
          </div>
        ))}
      </div>
    </div>
  );
};

const BidInput = ({ itemId, currentBid, onBid }) => {
  const [bidAmount, setBidAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBid = parseFloat(bidAmount);
    if (newBid > currentBid) {
      onBid(itemId, newBid);
      setBidAmount('');
    } else {
      alert('Your bid must be higher than the current bid!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bid-form">
      <input
        type="number"
        value={bidAmount}
        placeholder="Enter your bid"
        onChange={(e) => setBidAmount(e.target.value)}
        required
      />
      <button type="submit">Place Bid</button>
    </form>
  );
};

export default Auctions;
