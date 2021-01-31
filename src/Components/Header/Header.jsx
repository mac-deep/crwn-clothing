import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import "./Header.scss";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.styles";

import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCartHidden } from "../../Redux/cart/cartSelectors";
import { selectCurrentUser } from "../../Redux/user/userSelectors";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink
          as="div"
          onClick={() => {
            auth.signOut();
            console.log("you signed out");
          }}
        >
          <span>
            Sign Out <i className="fas fa-sign-out-alt"></i>
          </span>
        </OptionLink>
      ) : (
        <OptionLink to="/signin">
          <span>
            Sign In <i className="fas fa-sign-in-alt"></i>
          </span>
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
