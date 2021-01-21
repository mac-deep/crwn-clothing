import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/?" className="logo-container">
      <Logo />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link className="option">CONTACT</Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
            console.log("you signed out");
          }}
        >
          SignOut
        </div>
      ) : (
        <Link className="option" to="/signin">
          SignIn
        </Link>
      )}
    </div>
  </div>
);

export default Header;
