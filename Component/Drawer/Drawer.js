import React from "react";
import "./drawer.css";
import Link from "next/link";

const Drawer = () => {
  return (
    <div className="menu-drawer hide" id="drawer">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <ul className="nav flex-column mb-5 w-100 text-center fw-bold">
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
