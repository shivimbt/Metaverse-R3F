import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt='hotel logo' />
      <p>The Grand Hotel</p>
    </div>
  );
};

export default Header;
