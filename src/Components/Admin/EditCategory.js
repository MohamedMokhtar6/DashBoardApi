import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import CreateCategoryHook from "../../Hooks/CreateCategoryHook";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import notify from "../util/notify;";

function EditCategory() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [res, setRes] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const UpdateCategory = async () => {
    if (name === "") {
      notify("Enter Category Name", "error");
      return;
    }
    await axios
      .put(`https://localhost:7152/api/Categorys?id=${id}`, { name: name })
      .then((response) => {
        setRes(true);
        setInterval(() => {
          window.location.replace("/allCategories");
        }, 1000);
      });
  };

  useEffect(() => {
    axios
      .get(`https://localhost:7152/api/Categorys/id?id=${id}`)
      .then((response) => {
        setName(response.data.name);
      });
  }, []);

  return (
    <>
      <Row className="m-3 flex-column align-items-center ">
        <div className=" fw-bold fs-4 my-3 text-center"> Edit Category</div>
        <input
          placeholder="Category Name"
          type={"text"}
          className="fit userInput my-2 "
          value={name}
          onChange={handleChange}
        />

        <Button
          onClick={UpdateCategory}
          variant="dark"
          className="fit m-3 main-color"
        >
          Save
        </Button>
        {res && <h4 className="text-center text-success">category Edited</h4>}

        <ToastContainer />
      </Row>
    </>
  );
}

export default EditCategory;
