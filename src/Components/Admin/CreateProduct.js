import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

function CreateProduct() {
  return (
    <>
      <Row className="m-3 flex-column align-items-center ">
        <div className=" fw-bold fs-4 my-3 text-center">Add New Product</div>
        <div className="d-flex justify-content-between p-0">
          <input
            placeholder="Product Name"
            type={"text"}
            className="fit userInput my-2 "
          />
          <input
            placeholder="Product Price"
            type={"number"}
            className="fit userInput my-2 "
          />
        </div>
        <div className="d-flex justify-content-between p-0">
          <input
            placeholder="Product Rate"
            type={"number"}
            className="fit userInput my-2 "
          />
          <input
            placeholder="Product Quantity"
            type="number"
            className="fit userInput my-2 "
          />
        </div>
        <textarea
          placeholder="Product Description"
          type="text"
          rows={5}
          className="fit  my-2  w-100 "
          style={{ resize: "none", borderRadius: "20px", padding: "10px" }}
        />
        <input
          placeholder="Product Image"
          type="file"
          className="fit userInput my-2 "
        />
        <div className="d-flex justify-content-between p-0">
          <input
            placeholder="Product Category Id"
            type="number"
            className="fit userInput my-2 "
          />
          <input
            placeholder="Product Brand Id"
            type="number"
            className="fit userInput my-2 "
          />
        </div>
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

export default CreateProduct;
