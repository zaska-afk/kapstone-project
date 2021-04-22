import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Container>
      <Navbar variant="light" expand="lg" fixed="top" className="navbar">
        <Navbar.Brand>
          <b>Movie Buddies</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/home">
              <Nav.Link>
                <b>Home</b>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/survey">
              <Nav.Link>
                <b>Survey</b>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>
                <b>Profile</b>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chatrooms">
              <Nav.Link>
                <b>Chat Rooms</b>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>
                <b>Logout</b>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav.Item></Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;
