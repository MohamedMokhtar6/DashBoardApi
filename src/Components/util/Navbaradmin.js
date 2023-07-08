import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbaradmin() {
  var user = localStorage.getItem("user");

  const navigate = useNavigate();
  return (
    <div className="navBar align-items-center py-2">
      <i
        className="fa-solid fa-bars fs-2 click hideNav w-75  text-end"
        onClick={(e) => {
          let d = document.querySelectorAll(".navItem");
          let nav = document.querySelector(".navBar");
          for (const box of d) {
            box.classList.toggle("hide");
          }
        }}
      ></i>
      <div className=" justify-content-center navItem ms-2">
        <NavLink to={"/"}>
          <span className="fit ">{user ? <>{user}</> : null}</span>
        </NavLink>
      </div>
      <div className="navItem ">
        <NavLink to={"/allUsers"}>All Users</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/allProducts"}>All Products</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/allCategories"}>All Categories</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/allBrands"}>All Brands</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/allOrders"}>All orders</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/createUser"}>Create User</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/createProduct"}>Create Product</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/createCategory"}>Create Category</NavLink>
      </div>
      <div className="navItem">
        <NavLink to={"/createBrand"}>Create Brand</NavLink>
      </div>
      <div className="d-flex justify-content-center navItem">
        <button
          className="p-1  fit bg-dark text-white navItem userInput justify-content-center"
          onClick={() => {
            navigate("/login");
          }}
        >
          LogOut
        </button>
      </div>
    </div>
    // </div>
  );
}

export default Navbaradmin;
