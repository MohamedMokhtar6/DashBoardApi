import axios from "axios";
import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import notify from "../util/notify;";
const baseURL = "https://localhost:7152/api/Categorys";
function CreateCategory() {
  const [name, setName] = useState("");
  const [res, setRes] = useState(false);
  const category = { name: name };
  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const createCategory = async () => {
    if (name === "") {
      notify("Enter Category Name", "error");
      return;
    }
    await axios.post(baseURL, category).then((response) => {
      setRes(true);
      console.log(response.data);
      setInterval(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }, 1000);
    });
  };
  return (
    <>
      <Row className="m-3 flex-column align-items-center ">
        <div className=" fw-bold fs-4 my-3 text-center">Add New Category</div>
        <input
          placeholder="Category Name"
          type={"text"}
          className="fit userInput my-2 "
          value={name}
          onChange={handleChange}
        />

        <Button
          onClick={createCategory}
          variant="dark"
          className="fit m-3 main-color"
        >
          Save
        </Button>
        {res && <h4 className="text-center text-success">category added</h4>}

        <ToastContainer />
      </Row>
    </>
  );
}

export default CreateCategory;
