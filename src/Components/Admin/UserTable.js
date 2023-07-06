import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const baseURL = "https://localhost:7152/api/User";
function UserTable() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);
  if (users) {
    console.log(users);
  }
  return (
    <div className="DataTable">
      <Table striped bordered hover className="my-5 ">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>

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

export default UserTable;
