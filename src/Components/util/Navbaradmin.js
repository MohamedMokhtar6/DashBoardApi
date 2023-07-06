import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbaradmin() {
  const navigate = useNavigate();
  return (
    <div className="navBar align-items-center">
      <i
        className="fa-solid fa-bars fs-2 click hideNav"
        onClick={(e) => {
          let d = document.querySelectorAll(".navItem");
          let nav = document.querySelector(".navBar");
          for (const box of d) {
            box.classList.toggle("hide");
          }
        }}
      ></i>
      {/* <div className="hide  align-items-center"> */}
      <div className="d-flex justify-content-center navItem">
        <span className="fit ">Welcome Mohamed Mokhtar</span>
      </div>
      <div className="navItem ">
        <Link to={"/allUsers"}>All Users</Link>
      </div>
      <div className="navItem">
        <Link to={"/allProducts"}>All Products</Link>
      </div>
      <div className="navItem">
        <Link to={"/allCategories"}>All Categories</Link>
      </div>
      <div className="navItem">
        <Link to={"/allBrands"}>All Brands</Link>
      </div>
      <div className="navItem">
        <Link to={"/allOrders"}>All orders</Link>
      </div>
      <div className="navItem">
        <Link to={"/createUser"}>Create User</Link>
      </div>
      <div className="navItem">
        <Link to={"/createProduct"}>Create Product</Link>
      </div>
      <div className="navItem">
        <Link to={"/createCategory"}>Create Category</Link>
      </div>
      <div className="navItem">
        <Link to={"/createBrand"}>Create Brand</Link>
      </div>
      <div className="d-flex justify-content-center navItem">
        <button
          className="p-1 mt-4 fit bg-dark text-white navItem"
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
