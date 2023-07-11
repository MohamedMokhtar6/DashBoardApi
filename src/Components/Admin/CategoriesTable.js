import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import notify from "../util/notify;";
import { Link, useNavigate } from "react-router-dom";

function CategoriesTable() {
  const [categories, setCategories] = useState(null);
  const navigate = useNavigate();
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
      .delete(`https://localhost:7152/api/Categorys?id=${id}`)
      .then((response) => {
        if (response.data) {
          notify("Category Deleted", "success");
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
    axios.get("https://localhost:7152/api/Categorys").then((response) => {
      setCategories(response.data);
    });
  }, []);

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
                  <tr key={index} id={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.createDate}</td>
                    <td>{item.updateDate}</td>

                    <td className="text-center">
                      <Link to={`/editCategory/${item.id}`}>
                        <i className="fa-solid fa-pen-to-square click"></i>
                      </Link>
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

export default CategoriesTable;
