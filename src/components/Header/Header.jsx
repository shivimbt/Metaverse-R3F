import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="hotel logo" />
      <h1>The Grand Hotel</h1>
    </div>
  );
};

export default Header;
