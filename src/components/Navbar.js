import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        Left Side
        <img src={logo} alt="Logo" />
      </div>
      <div className="rightSide">Right Side</div>
    </div>
  );
}

export default Navbar;
