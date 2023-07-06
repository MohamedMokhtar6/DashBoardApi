import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import cart from "../../Images/cart2.png";

function LoginForm() {
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
            />
          </div>
          <div className="divInput">
            <i className="fa-solid fa-lock mx-2"></i>
            <input
              type="password"
              placeholder="Password"
              className="logInInput"
            />
          </div>
          <button
            className="p-1 mt-4 loginBtn"
            onClick={() => {
              navigate("/");
            }}
          >
            LOGIN
          </button>
        </div>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default LoginForm;
