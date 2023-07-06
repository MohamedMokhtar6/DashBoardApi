import React from "react";
import { Table } from "react-bootstrap";

function OrdersTable() {
  return (
    <div className="DataTable">
      <Table striped bordered hover className="my-5 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Order By</th>
            <th>Order Details</th>
            <th>Order Status</th>
            <th>Order Address</th>
            <th>Phone Number</th>
            <th>CreateDate</th>
            <th>Order Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mohamed</td>
            <td>1 polo t-shart</td>
            <td>In Progress</td>
            <td>Cairo Egypt</td>
            <td>01000</td>
            <td>2023</td>
            <td>100 $</td>
            <td className="text-center">
              <i className="fa-solid fa-trash text-danger"></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default OrdersTable;
