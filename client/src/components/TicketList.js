import React, { useState, useEffect, Fragment } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  const getAllTickets = async () => {
    try {
      const response = await axios.get("/api/tickets");

      const data = await response.data;
      setTickets(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAllTickets();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center mt-4">My Tickets</h1>
      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tickets &&
            tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket.subject}</td>
                <td>{ticket.category}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{ticket.date.substring(0, 10)}</td>
                <td>
                  <Link to={`/edit/${ticket._id}`}>
                    <button className="btn btn-success">Edit</button>
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default TicketList;
