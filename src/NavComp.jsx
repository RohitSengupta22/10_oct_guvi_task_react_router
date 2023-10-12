import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './App.css'


const NavComp = () => {
  return (
   
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Guvi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-center">
          <Nav className="justify-content-center">
            <Nav.Link as={NavLink} to="/">All</Nav.Link>
            <Nav.Link as={NavLink} to="/FSD">Full Stack Development</Nav.Link>
            <Nav.Link as={NavLink} to="/DS">Data Science</Nav.Link>
            <Nav.Link as={NavLink} to="/CS">Cyber Security</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavComp
