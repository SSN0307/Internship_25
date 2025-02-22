import React from "react";
import AuctionCard from "./AuctionCard";
import { Container, Row, Col } from "react-bootstrap";

const sampleAuctions = [
  {
    id: 1,
    title: "Antique Vase",
    image: "https://via.placeholder.com/300",
    description: "A rare and beautiful antique vase from the 18th century.",
    currentBid: 150,
  },
  {
    id: 2,
    title: "Vintage Watch",
    image: "https://via.placeholder.com/300",
    description: "A classic Rolex watch in perfect condition.",
    currentBid: 1200,
  },
  {
    id: 3,
    title: "Painting by Monet",
    image: "https://via.placeholder.com/300",
    description: "A stunning reproduction of a Monet masterpiece.",
    currentBid: 5000,
  },
];

const AuctionList = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Live Auctions</h1>
      <Row>
        {sampleAuctions.map((auction) => (
          <Col key={auction.id} md={4} className="mb-4">
            <AuctionCard {...auction} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AuctionList;
