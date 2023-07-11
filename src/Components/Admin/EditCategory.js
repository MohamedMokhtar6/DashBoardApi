import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import EditCategoryHook from "../../Hooks/EditCategoryHook";

function EditCategory() {
  const [res, UpdateCategory, handleChange, name] = EditCategoryHook();
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
