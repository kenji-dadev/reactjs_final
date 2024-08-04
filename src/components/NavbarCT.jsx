import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import cat from "../assets/Screenshot 2024-07-25 082816.png"
import '../App.css'

function NavbarCT() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-light m-2 sticky-xxl-top">
      <Image src={cat} rounded style={{ width: 40, height: 40, margin:2}}/>
      <Container fluid className='bg-light rounded '>
          <Navbar.Brand href="#home" className='bg-light'>MR: Beer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='bg-light'>
              <Nav className="me-auto"></Nav>
              <Nav className="mr-auto bg-light" >
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin">
                  <Nav.Link>Admin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/management">
                  <Nav.Link>Management</Nav.Link>
                </LinkContainer>
              </Nav>
          </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavbarCT