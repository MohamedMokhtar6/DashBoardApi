import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import notify from "../util/notify;";
import { ToastContainer } from "react-toastify";
function UserTable() {
  const [users, setUsers] = useState(null);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (e) => {
    setId(e.target.parentNode.parentNode.id);
    handleShow();
  };
  const handelDelete = async () => {
    await axios
      .delete(`https://localhost:7152/api/User?id=${id}`)
      .then((response) => {
        if (response.data) {
          notify("User Deleted", "success");
        } else {
        }

        setInterval(() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }, 2000);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          notify(error.response.data, "warn");
        }
      });
    setShow(false);
  };
  useEffect(() => {
    axios.get("https://localhost:7152/api/User").then((response) => {
      setUsers(response.data);
    });
  }, []);
  if (users) {
    // console.log(users);
  }
  return (
    <div className="DataTable">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>ِِAre you sure to delete ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handelDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Table striped bordered hover className="my-5 ">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((item, index) => {
                return (
                  <tr key={index} id={item.id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>

                    <td className="text-center">
                      <i className="fa-solid fa-pen-to-square click"></i>
                    </td>
                    <td className="text-center">
                      <i
                        className="fa-solid fa-trash text-danger click"
                        onClick={handleDelete}
                      ></i>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
      <ToastContainer />
    </div>
  );
}

export default UserTable;
