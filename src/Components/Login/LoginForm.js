import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import cart from "../../Images/cart2.png";
import notify from "../util/notify;";
import axios from "axios";
const baseURL = "https://localhost:7152/api/Auth/SignIn";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  const login = { email: email, password: password };
  const handleChangePassword = (event) => {
    event.persist();
    setPassword(event.target.value);
  };
  const handleChangeEmail = (event) => {
    event.persist();
    setEmail(event.target.value);
  };

  const Login = async () => {
    if (email === "") {
      notify("Enter  email", "error");
      return;
    }
    if (password === "") {
      notify("Enter  passsword", "error");
      return;
    }
    await axios
      .post(baseURL, login)
      .then((response) => {
        setRes(response.data);

        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          notify(error.response.data, "warn");
        }
      });
  };
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.token) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", res.userName);
          notify(res.masseage, "success");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        setLoading(true);
      }
    }
  }, [loading]);
  const navigate = useNavigate();
  return (
    <div className="loginPage">
      <Container className="h-100 d-flex  justify-content-center align-items-center">
        <div className=" login fit  d-flex flex-column align-items-center">
          <img src={cart} className="loginImg" alt="cart" />
          <div className="divInput">
            <i className="fa-solid fa-envelope mx-2 "></i>

            <input
              type="email"
              placeholder="Your Email"
              className="logInInput"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className="divInput">
            <i className="fa-solid fa-lock mx-2"></i>
            <input
              type="password"
              placeholder="Password"
              className="logInInput pass"
              value={password}
              onChange={handleChangePassword}
            />
            <i
              className="fa-solid fa-eye click"
              onClick={(e) => {
                e.target.classList.toggle("fa-eye-slash");
                let pass = document.querySelector(".pass");
                pass.type = "text";
                if (!e.target.classList.contains("fa-eye-slash")) {
                  pass.type = "password";
                }
              }}
            ></i>
          </div>
          <button className="p-1 mt-4 loginBtn" onClick={Login}>
            LOGIN
          </button>
          {loading ? null : (
            <Spinner animation="border" role="status"></Spinner>
          )}
        </div>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default LoginForm;
