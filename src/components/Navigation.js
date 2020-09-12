import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import resumePDF from '../media/resume.pdf';
import resumeDOCX from '../media/resume.docx';
export default function Navigation(props){
    return(
    <Navbar  bg="primary" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="/">Navie Huynh</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="https://www.linkedin.com/in/navie-huynh/">LinkedIn</Nav.Link>
        <Nav.Link href="https://github.com/NavieHuynh">Github</Nav.Link>
        <Nav.Link href="https://medium.com/@naviehuynh_49819">Medium</Nav.Link>
        <NavDropdown title="Resume" id="basic-nav-dropdown">
          <NavDropdown.Item href={resumePDF}>PDF</NavDropdown.Item>
          <NavDropdown.Item href={resumeDOCX}>Word (.docx)</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}