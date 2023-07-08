import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import CreateUserHook from "../../Hooks/CreateUserHook";

function CreateUser() {
  const [
    firstName,
    lastName,
    username,
    password,
    phoneNumber,
    res,
    email,
    handleChangeFirstName,
    handleChangeLastName,
    handleChangeUserName,
    handleChangeEmail,
    handleChangePassword,
    handleChangePhone,
    createUser,
  ] = CreateUserHook();
  return (
    <>
      <Row className="m-3 flex-column align-items-center ">
        <div className=" fw-bold fs-4 my-3 text-center">Add New User</div>
        <div className="d-flex justify-content-between p-0">
          <input
            placeholder="First Name"
            type={"text"}
            className="fit userInput my-2  "
            value={firstName}
            onChange={handleChangeFirstName}
          />
          <input
            placeholder="Last Name"
            type={"text"}
            className="fit userInput my-2 "
            value={lastName}
            onChange={handleChangeLastName}
          />
        </div>
        <input
          placeholder="User Name"
          type={"text"}
          className="fit userInput my-2 w-100 "
          value={username}
          onChange={handleChangeUserName}
        />
        <input
          placeholder="User Email"
          type="email"
          className="fit userInput my-2 w-100"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          placeholder="User Password"
          type="password"
          className="fit userInput my-2 w-100"
          value={password}
          onChange={handleChangePassword}
        />
        <input
          placeholder="Phone Number"
          type="tel"
          className="fit userInput my-2 w-100"
          value={phoneNumber}
          onChange={handleChangePhone}
        />
        <Button
          variant="dark"
          className="fit m-3 main-color"
          onClick={createUser}
        >
          Save
        </Button>
        {res && <h4 className="text-center text-success">category added</h4>}
        <ToastContainer />
      </Row>
    </>
  );
}

export default CreateUser;
