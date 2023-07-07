import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import notify from "../util/notify;";
import axios from "axios";
const baseURL = "https://localhost:7152/api/Auth/Register";
function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [res, setRes] = useState(false);
  const user = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
  };
  const handleChangeFirstName = (event) => {
    event.persist();
    setFirstName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    event.persist();
    setLastName(event.target.value);
  };
  const handleChangeUserName = (event) => {
    event.persist();
    setUsername(event.target.value);
  };
  const handleChangeEmail = (event) => {
    event.persist();
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    event.persist();
    setPassword(event.target.value);
  };
  const handleChangePhone = (event) => {
    event.persist();
    setphoneNumber(event.target.value);
  };

  const createUser = async () => {
    if (
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      phoneNumber === ""
    ) {
      notify("Complete Data!!", "warn");
      return;
    }
    if (phoneNumber.length < 11) {
      notify("Wrong PhoneNumber", "warn");
      return;
    }
    await axios
      .post(baseURL, user)
      .then((response) => {
        setRes(true);
        console.log(response.data);
        setInterval(() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }, 1000);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          notify(error.response.data, "warn");
        }
      });
  };
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
