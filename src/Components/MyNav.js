import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MyNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" className="mx-2">Home</Nav.Link>
          <Nav.Link href="#" className="mx-2">About</Nav.Link>
          <Nav.Link href="#" className="mx-2">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;

