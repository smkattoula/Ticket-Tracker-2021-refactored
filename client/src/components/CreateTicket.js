import React, { Fragment, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

import AuthContext from "../context/auth/AuthContext";

const CreateTicket = () => {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  let history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const ticket = {
        subject,
        category,
        priority,
        description,
        date: Date.now(),
      };

      const config = { headers: { "Content-Type": "application/json" } };

      if (
        subject === "" ||
        category === "" ||
        priority === "" ||
        description === ""
      ) {
        setShow(true);
      }

      const response = await axios.post("/api/tickets", ticket, config);
      const data = await response.data;
      console.log(data);
      history.push("/");
    } catch (error) {
      console.error(error.messsage);
    }
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center mt-4">Create a New Ticket</h1>
        {show && (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>All fields are required</Alert.Heading>
            <p>Please enter all fields</p>
          </Alert>
        )}
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select a Category</option>
            <option>General</option>
            <option>Billing</option>
            <option>Login</option>
            <option>Abuse</option>
            <option>Website</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Select a Priority Level</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button className="btn btn-block" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default CreateTicket;
