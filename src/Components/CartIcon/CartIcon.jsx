import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/cart.svg";
import { toggleCartHidden } from "../../Redux/cart/cartActions";
import { selectCartItemsCount } from "../../Redux/cart/cartSelectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div
      // className="cart-icon"
      style={{
        width: "45px",
        height: "45px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={toggleCartHidden}
    >
      <ShoppingIcon className="shopping-icon" />
      <span
        // className="item-count"
        style={{
          position: "absolute",
          top: "16px",
          fontSize: "16px",
          fontWeight: "600",
          bottom: "9px",
        }}
      >
        {itemCount}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
