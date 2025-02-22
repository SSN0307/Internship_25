import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuctionCard = ({ id, title, image, description, currentBid }) => {
  return (
    <Card className="shadow-sm border-0 rounded overflow-hidden">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="text-success fw-bold">Current Bid: ${currentBid}</Card.Text>
        <Button as={Link} to={`/product/${id}`} variant="primary" className="w-100">
          View Auction
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AuctionCard;
