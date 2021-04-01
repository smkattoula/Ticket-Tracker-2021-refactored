import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Container, Alert, Button } from "react-bootstrap";
import AuthContext from "../context/auth/AuthContext";

const Login = () => {
  const [alert, setAlert] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated, loadUser } = authContext;

  let history = useHistory();

  useEffect(() => {
    loadUser();

    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(<Alert variant="danger">Invalid Credentials</Alert>);
      setTimeout(() => {
        setAlert();
        clearErrors();
      }, 5000);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert(<Alert color="danger">Please enter all fields</Alert>);
    } else {
      login({ email, password });
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-3">
        Account <span className="text-primary">Login</span>
      </h1>
      {alert}
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email..."
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password..."
            onChange={onChange}
            required
            minLength="6"
          />
        </FormGroup>
        <Button className="btn btn-block" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
