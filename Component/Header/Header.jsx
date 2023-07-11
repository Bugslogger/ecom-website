"use client";

import React, { createElement, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import "./header.css";
import Drawer from "../Drawer/Drawer";
import { ReactIcons } from "../../functions";
import Link from "next/link";

export default function Header() {
  const [show, setshow] = useState(false);

  const ToggleMenu = (toggle) => {
    let drawer = document.getElementById("drawer");
    if (!toggle) {
      setshow(toggle);
      fade(drawer);
      setTimeout(() => {
        // drawer.classList.add("hide");
      }, 500);
    } else {
      unfade(drawer);
      setTimeout(() => {
        setshow(toggle);
      }, 1000);
    }
  };

  function fade(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function () {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = "none";
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op -= op * 0.1;
    }, 50);
  }

  function unfade(element) {
    var op = 0.1; // initial opacity
    element.style.display = "block";
    var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1;
    }, 10);
  }

  return (
    <header className="header d-flex justify-content-start align-items-center px-4">
      <div>
        {
          !show ? (
            <span
              onClick={() => ToggleMenu(true)}
              className="menu-icon text-white fs-3"
            >
              {createElement(ReactIcons("BiMenu"))}
            </span>
          ) : (
            // <BiMenu
            //   onClick={() => ToggleMenu(true)}
            //   className="menu-icon text-white fs-3"
            // />
            <span
              onClick={() => ToggleMenu(false)}
              className="menu-icon text-white fs-3"
            >
              {createElement(ReactIcons("MdOutlineClose"))}
            </span>
          )
          // <MdOutlineClose
          //   onClick={() => ToggleMenu(false)}
          //   className="menu-icon text-white fs-3"
          // />
        }
      </div>
      <div className="text-white w-100 fw-bold text-center header-logo">
        Ecom
      </div>
      <div
        className="text-white fw-bold text-end fs-3"
      >
        <Link href={"#"} style={{ cursor: "pointer", color: "#fff" }}>
          {createElement(ReactIcons("MdOutlineShoppingCart"))}
        </Link>
      </div>
      <Drawer />
    </header>
  );
}
