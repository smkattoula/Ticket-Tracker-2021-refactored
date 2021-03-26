import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const EditTicket = ({ match }) => {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  let history = useHistory();

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
    getSingleTicket();
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
      const data = await response.data;
      history.push("/list");
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
          <Form.Control
            type="text"
            placeholder="Enter status..."
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Group>
        <Button className="btn btn-block" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default EditTicket;
