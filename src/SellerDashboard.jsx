import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Container, Card } from "react-bootstrap";

const SellerDashboard = () => {
  const [auctions, setAuctions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newAuction, setNewAuction] = useState({ title: "", description: "", image: "", startingBid: "" });

  useEffect(() => {
    fetch("/api/seller-auctions")
      .then((res) => res.json())
      .then((data) => setAuctions(data))
      .catch((err) => console.error("Error fetching seller auctions:", err));
  }, []);

  const handleAddAuction = () => {
    // API call to add auction (to be implemented)
    setShowModal(false);
  };

  return (
    <Container className="py-5">
      <Card className="shadow-lg p-4">
        <h2 className="text-center mb-4">Seller Dashboard</h2>
        <Button variant="success" className="mb-3" onClick={() => setShowModal(true)}>+ Add New Auction</Button>
        <Table striped bordered hover responsive className="text-center">
          <thead className="bg-dark text-white">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Starting Bid</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {auctions.map((auction) => (
              <tr key={auction.id}>
                <td>{auction.title}</td>
                <td>{auction.description}</td>
                <td>${auction.startingBid}</td>
                <td>
                  <Button variant="warning" className="me-2">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      {/* Modal for Adding New Auction */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Auction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter auction title" value={newAuction.title} onChange={(e) => setNewAuction({ ...newAuction, title: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" value={newAuction.description} onChange={(e) => setNewAuction({ ...newAuction, description: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="Enter image URL" value={newAuction.image} onChange={(e) => setNewAuction({ ...newAuction, image: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Starting Bid</Form.Label>
              <Form.Control type="number" placeholder="Enter starting bid" value={newAuction.startingBid} onChange={(e) => setNewAuction({ ...newAuction, startingBid: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddAuction}>Save</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SellerDashboard;
