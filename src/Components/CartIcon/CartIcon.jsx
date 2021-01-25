import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/cart.svg";
import { toggleCartHidden } from "../../Redux/cart/cartActions";
import { selectCartItemsCount } from "../../Redux/cart/cartSelectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
