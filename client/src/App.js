import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppNavBar from "./components/AppNavBar";
import CreateTicket from "./components/CreateTicket";
import EditTicket from "./components/EditTicket";
import TicketList from "./components/TicketList";
import Register from "./components/Register";
import Login from "./components/Login";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

import AuthState from "./context/auth/AuthState";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <Fragment>
        <Router>
          <AppNavBar />
          <Container>
            <Switch>
              <PrivateRoute exact path="/" component={TicketList} />
              <PrivateRoute exact path="/create" component={CreateTicket} />
              <PrivateRoute exact path="/edit/:id" component={EditTicket} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Container>
        </Router>
      </Fragment>
    </AuthState>
  );
};

export default App;
