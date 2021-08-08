import React, { Fragment, useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import AuthContext from "../context/auth/AuthContext";

const AppNavBar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <Nav.Link style={{ color: "white" }}>
        Hello, {user && user.name}!
      </Nav.Link>

      <LinkContainer to="/">
        <Nav.Link className="navbar-link">My Tickets</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/create">
        <Nav.Link>Create Ticket</Nav.Link>
      </LinkContainer>

      <Nav.Link className="navbar-link" onClick={onLogout} href="/login">
        <i className="fas fa-sign-out-alt fa-sm"></i> <span>Logout</span>
      </Nav.Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <LinkContainer to="/register">
        <Nav.Link className="navbar-link">Register</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/login">
        <Nav.Link className="navbar-link">Login</Nav.Link>
      </LinkContainer>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="appNavBar"
      >
        <LinkContainer to="/">
          <Navbar.Brand>Ticket Tracker</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default AppNavBar;
