import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppNavBar from "./components/AppNavBar";
import CreateTicket from "./components/CreateTicket";
import EditTicket from "./components/EditTicket";
import TicketList from "./components/TicketList";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <AppNavBar />
        <Container>
          <Switch>
            <Route exact path="/create" component={CreateTicket} />
            <Route exact path="/edit/:id" component={EditTicket} />
            <Route exact path="/list" component={TicketList} />
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
};

export default App;
