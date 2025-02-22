import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const sampleAuction = {
  id: 1,
  title: "Antique Vase",
  image: "https://via.placeholder.com/500",
  description: "A rare and beautiful antique vase from the 18th century.",
  currentBid: 150,
};

const ProductDetail = () => {
  const { id } = useParams();
  // Normally, fetch data based on `id`, but using sample data for now
  const auction = sampleAuction;

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={auction.image} alt={auction.title} />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{auction.title}</h2>
          <p>{auction.description}</p>
          <h4 className="text-success">Current Bid: ${auction.currentBid}</h4>
          <Button variant="primary" className="mt-3">Place Bid</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
