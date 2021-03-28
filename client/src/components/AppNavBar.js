import React, { Fragment, useContext } from "react";
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
      <Nav.Item>
        <Nav.Link className="navbar-link" href="/list">
          My Tickets
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/create">Create Ticket</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="navbar-link" onClick={onLogout} href="/">
          <i className="fas fa-sign-out-alt fa-sm"></i> <span>Logout</span>
        </Nav.Link>
      </Nav.Item>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Nav.Item>
        <Nav.Link className="navbar-link" href="/register">
          Register
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="navbar-link" href="/login">
          Login
        </Nav.Link>
      </Nav.Item>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Ticket Tracker</Navbar.Brand>
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
