import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

function CreateUser() {
  return (
    <>
      <Row className="m-3 flex-column align-items-center ">
        <div className=" fw-bold fs-4 my-3 text-center">Add New User</div>
        <div className="d-flex justify-content-between p-0">
          <input
            placeholder="First Name"
            type={"text"}
            className="fit userInput my-2  "
          />
          <input
            placeholder="Last Name"
            type={"text"}
            className="fit userInput my-2 "
          />
        </div>
        <input
          placeholder="User Name"
          type={"text"}
          className="fit userInput my-2 w-100 "
        />
        <input
          placeholder="User Email"
          type="email"
          className="fit userInput my-2 w-100"
        />
        <input
          placeholder="User Password"
          type="password"
          className="fit userInput my-2 w-100"
        />
        <input
          placeholder="Phone Number"
          type="tel"
          className="fit userInput my-2 w-100"
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

export default CreateUser;
