import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import CreateCategoryHook from "../../Hooks/CreateCategoryHook";
function CreateCategory() {
  const [name, handleChange, createCategory, res, clicked] =
    CreateCategoryHook();
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
          className={
            clicked ? "fit m-3 main-color disabled" : "fit m-3 main-color"
          }
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
