import React, { Fragment, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import AuthContext from "../context/auth/AuthContext";

const EditTicket = ({ match }) => {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [toggle, setToggle] = useState(true);

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  let history = useHistory();

  const checkBoxToggle = () => {
    setToggle(!toggle);
    if (status === "Open") {
      setStatus("Closed");
    } else {
      setStatus("Open");
    }
  };

  const openTicketChecked = (
    <Fragment>
      <Form.Check
        inline
        label="Open"
        defaultChecked
        value={status}
        onClick={checkBoxToggle}
        type="checkbox"
        id="1"
      />
      <Form.Check
        inline
        label="Closed"
        type="checkbox"
        value={status}
        onClick={checkBoxToggle}
        id="2"
      />
    </Fragment>
  );

  const closedTicketChecked = (
    <Fragment>
      <Form.Check
        inline
        label="Open"
        value={status}
        onClick={checkBoxToggle}
        type="checkbox"
        id="1"
      />
      <Form.Check
        inline
        label="Closed"
        defaultChecked
        type="checkbox"
        value={status}
        onClick={checkBoxToggle}
        id="2"
      />
    </Fragment>
  );

  const getSingleTicket = async () => {
    try {
      const response = await axios.get(`/api/tickets/${match.params.id}`);

      const data = response.data;

      const { subject, category, priority, description, status } = data;

      setSubject(subject);
      setCategory(category);
      setPriority(priority);
      setDescription(description);
      setStatus(status);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    loadUser();
    getSingleTicket();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const ticket = {
        subject,
        category,
        priority,
        description,
        status,
        date: new Date(),
      };

      const config = { headers: { "Content-Type": "application/json" } };

      const response = await axios.put(
        `/api/tickets/update/${match.params.id}`,
        ticket,
        config
      );

      await response.data;
      history.push("/");
    } catch (error) {
      console.error(error.messsage);
    }
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center mt-4">Edit Ticket</h1>
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
        <Form.Group>
          <Form.Label>Status</Form.Label>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              {status === "Open" && openTicketChecked}
              {status === "Closed" && closedTicketChecked}
            </div>
          ))}
        </Form.Group>
        <Button className="btn btn-block" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default EditTicket;
