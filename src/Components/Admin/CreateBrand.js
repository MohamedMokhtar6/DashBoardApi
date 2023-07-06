import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

function CreateBrand() {
  return (
    <>
      <Row className="m-3 flex-column align-items-center ">
        <div className=" fw-bold fs-4 my-3 text-center">Add New Brand</div>
        <input
          placeholder="Brand Name"
          type={"text"}
          className="fit userInput my-2 "
        />
        <input
          placeholder="Category Id"
          type={"number"}
          className="fit userInput my-2 "
        />
        <input
          placeholder="Brand Image"
          type={"file"}
          className="fit userInput my-2 "
        />

        <Button
          // style={{ backgroundColor: "000000" }}
          variant="dark"
          className="fit m-3 main-color"
        >
          Save
        </Button>

        <ToastContainer />
      </Row>
    </>
  );
}

export default CreateBrand;
