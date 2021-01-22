import React from "react";
import "./CartDropDown.scss";
import CustomButton from "../CustomButtom/CustomButton";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go to CheckOut</CustomButton>
  </div>
);

export default CartDropDown;
