import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import SearchBox from '../components/SearchBox'

function NavBar() {
  return (
    <Container>
      <Navbar
        variant="light"
        bg="warning"
        expand="lg"
        fixed="top"
        className="navbar"
      >
        <Navbar.Brand>Movie Buddies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chatrooms">
              <Nav.Link>Chat Rooms</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav.Item></Nav.Item>
        </Navbar.Collapse>
        <SearchBox />
      </Navbar>
    </Container>
  );
}

export default NavBar;
