import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Sea2Sky from "./images/Sea2Sky.png";
import "./Header.css";

export default function Header() {
return (
<div className="header">
<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
  <Navbar.Brand href="#home">Ride Green</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Navbar.Collapse id="responsive-navbar-nav">
      
    <Nav className="ml-auto">
      <Nav.Link href="#what-we-do">What We Do</Nav.Link>
      <NavDropdown title="About Us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#fleet">Fleet</NavDropdown.Item>
        <NavDropdown.Item href="#sustainability">Sustainability</NavDropdown.Item>
        <NavDropdown.Item href="#mission">Mission</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#faqs">FAQs</Nav.Link>
      <Nav.Link href="#contact">
        Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
</Navbar>
<img src={Sea2Sky} alt="Sea To Sky" className="responsive hero-image" />
</div>
)}