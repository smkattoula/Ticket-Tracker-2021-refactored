import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";

const AppNavBar = () => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Ticket Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/list">My Tickets</Nav.Link>
            <Nav.Link href="/create">Create Ticket</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default AppNavBar;
