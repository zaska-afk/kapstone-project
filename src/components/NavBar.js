import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import useStore from "../store";

function NavBar(props) {
  const user = useStore((state) => state.user.user);
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
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
            <LinkContainer to={`/profile/${user._id}`}>
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
                <div onClick={logout}>Logout</div>
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
