import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option">SHOP</Link>
      <Link className="option">CONTACT</Link>
    </div>
  </div>
);

export default Header;
