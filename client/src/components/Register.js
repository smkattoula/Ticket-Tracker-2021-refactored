import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Container, Alert, Button } from "react-bootstrap";
import AuthContext from "../context/auth/AuthContext";

const Register = () => {
  const [alert, setAlert] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const authContext = useContext(AuthContext);

  const {
    register,
    error,
    clearErrors,
    isAuthenticated,
    loadUser,
  } = authContext;

  let history = useHistory();

  useEffect(() => {
    loadUser();

    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "User already exists") {
      setAlert(<Alert variant="danger">User already exists</Alert>);
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
    if (name === "" || email === "" || password === "") {
      setAlert(<Alert variant="danger">Please enter all fields</Alert>);
      setTimeout(() => {
        setAlert();
      }, 5000);
    } else if (password !== password2) {
      setAlert(<Alert variant="danger">Passwords do not match</Alert>);
      setTimeout(() => {
        setAlert();
      }, 5000);
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-3">
        Account <span className="text-primary">Registration</span>
      </h1>
      {alert}
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            placeholder="Enter name..."
            onChange={onChange}
            required
          />
        </FormGroup>
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
        <FormGroup>
          <Form.Label htmlFor="password2">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password2"
            value={password2}
            placeholder="Re-enter password..."
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

export default Register;
