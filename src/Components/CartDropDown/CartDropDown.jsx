import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./CartDropDown.scss";
import CustomButton from "../CustomButtom/CustomButton";
import { selectCartItems } from "../../Redux/cart/cartSelectors";
import CartItem from "../CartItem/CartItem";
import { toggleCartHidden } from "../../Redux/cart/cartActions";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
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
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        <span>
          Go to CheckOut <i class="fas fa-shopping-cart"></i>
        </span>
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
