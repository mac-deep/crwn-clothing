import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/?" className="logo-container">
      <Logo />
    </Link>
    {currentUser ? (
      <div className="option">
        <h1>Welcome, {currentUser.displayName}</h1>
      </div>
    ) : null}

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
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
  // debugger;
  return {
    currentUser,
    hidden,
  };
};

export default connect(mapStateToProps)(Header);
