import axios from "axios";
import { useState } from "react";
import notify from "../Components/util/notify;";
const baseURL = "https://localhost:7152/api/Auth/Register";

export default function CreateUserHook() {
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

  return [
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
  ];
}
