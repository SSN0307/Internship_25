import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Auction House. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
