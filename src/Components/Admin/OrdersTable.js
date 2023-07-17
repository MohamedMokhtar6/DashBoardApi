import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [tableRows, setTableRows] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:7152/api/Order").then((response) => {
      setOrders(response.data);
    });
  }, []);

  const getTotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total = total + items[i].total;
    }
    return total;
  };

  const getProductDetails = async (items) => {
    let productNames = [];

    for (let i = 0; i < items.length; i++) {
      let productId = items[i].productId;

      try {
        let response = await axios.get(
          `https://localhost:7152/api/Products/id?id=${productId}`
        );
        productNames.push(response.data.name);
      } catch (error) {
        console.log(error);
        productNames.push("");
      }
    }

    return productNames;
  };
  const getUser = async (id) => {
    let user = "";

    try {
      let response = await axios.get(`https://localhost:7152/api/User/${id}`);
      user = response.data.userName;
    } catch (error) {
      console.log(error);
    }

    return user;
  };

  useEffect(() => {
    if (orders.length > 0) {
      Promise.all(
        orders.map(async (order, index) => {
          let productNames = await getProductDetails(order.orderItems);
          let userName = await getUser(order.userId);
          return (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{userName}</td>
              <td>{productNames.join(", ")}</td>
              <td>{order.orderStatus}</td>
              <td>{order.address}</td>
              <td>{order.city}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.createdDate}</td>
              <td>{getTotal(order.orderItems)} $</td>
              <td className="text-center">
                <i className="fa-solid fa-trash text-danger"></i>
              </td>
            </tr>
          );
        })
      ).then((tableRows) => {
        setTableRows(tableRows);
      });
    }
  }, [orders]);

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
            <th>Order City</th>
            <th>Phone Number</th>
            <th>CreateDate</th>
            <th>Order Total</th>
            <th>Delete</th>
          </tr>
        </thead>

        {tableRows ? <tbody>{tableRows}</tbody> : null}
      </Table>
    </div>
  );
}

export default OrdersTable;
