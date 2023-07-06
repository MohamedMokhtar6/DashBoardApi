import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const baseURL = "https://localhost:7152/api/Categorys";

function CategoriesTable() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCategories(response.data);
    });
  }, []);
  if (categories) {
    console.log(categories);
  }
  return (
    <div className="DataTable">
      <Table striped bordered hover className="my-5 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Category Name</th>
            <th>CreateDate</th>
            <th>UpdateDate</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories
            ? categories.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.createDate}</td>
                    <td>{item.updateDate}</td>

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

export default CategoriesTable;
