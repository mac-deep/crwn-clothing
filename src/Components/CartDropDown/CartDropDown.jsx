import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./CartDropDown.scss";
import CustomButton from "../CustomButtom/CustomButton";
import { selectCartItems } from "../../Redux/cart/cartSelectors";
import CartItem from "../CartItem/CartItem";

const CartDropDown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty :( </span>
      )}
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>
      Go to CheckOut
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
