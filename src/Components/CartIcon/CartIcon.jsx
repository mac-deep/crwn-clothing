import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/cart.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/cart/cartActions";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">10</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
