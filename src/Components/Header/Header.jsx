import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Header.scss";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCartHidden } from "../../Redux/cart/cartSelectors";
import { selectCurrentUser } from "../../Redux/user/userSelectors";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>
    {/* {currentUser ? (
      <div className="option">
        <h1>Welcome, {currentUser.displayName}</h1>
      </div>
    ) : null} */}

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
          <span>
            SignOut <i class="fas fa-sign-out-alt"></i>
          </span>
        </div>
      ) : (
        <Link className="option" to="/signin">
          <span>
            Sign In <i class="fas fa-sign-in-alt"></i>
          </span>
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
