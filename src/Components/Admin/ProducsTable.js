import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const baseURL = "https://localhost:7152/api/Products";

function ProducsTable() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);
  if (products) {
    console.log(products);
  }
  return (
    <div className="DataTable">
      <Table striped bordered hover className="my-5 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th>CreateDate</th>
            <th>UpdateDate</th>
            <th>Category Name</th>
            <th>Brand Name</th>
            <th>Poster</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products
            ? products.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.rate}</td>
                    <td>{item.quntity}</td>
                    <td>{item.createDate}</td>
                    <td>{item.updateDate}</td>
                    <td>{item.category.name}</td>
                    <td>{item.brand.name}</td>
                    <td>
                      <img
                        src={"data:image/png;base64," + item.poster}
                        style={{ height: "4rem", width: "4rem" }}
                      />
                    </td>

                    <td className="text-center">
                      <i className="fa-solid fa-trash text-danger click"></i>
                    </td>
                    <td className="text-center">
                      <i className="fa-solid fa-pen-to-square click"></i>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </div>
  );
}

export default ProducsTable;
