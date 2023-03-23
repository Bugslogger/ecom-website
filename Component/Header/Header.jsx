"use client";

import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import "./header.css";
import Drawer from "../Drawer/Drawer";

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
        {!show ? (
          <BiMenu
            onClick={() => ToggleMenu(true)}
            className="menu-icon text-white fs-3"
          />
        ) : (
          <MdOutlineClose
            onClick={() => ToggleMenu(false)}
            className="menu-icon text-white fs-3"
          />
        )}
      </div>
      <div className="text-white w-100 fw-bold text-center header-logo">
        Ecom
      </div>
      <Drawer />
    </header>
  );
}
