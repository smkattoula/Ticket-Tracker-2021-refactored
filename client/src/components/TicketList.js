import React, { useState, useEffect, Fragment } from "react";
import { Table, Container } from "react-bootstrap";
import axios from "axios";

const TicketList = () => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Website</td>
            <td>Medium</td>
            <td>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sit
              commodi blanditiis explicabo ut minus. Dolorum enim eveniet iste
              odio dolor, ex reprehenderit? Facere ea quisquam ipsum consectetur
              eius unde.
            </td>
            <td>Open</td>
            <td>03-25-2021</td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default TicketList;
