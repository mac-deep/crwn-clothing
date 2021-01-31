import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles";
import "./CustomButton.scss";

const CustomButton = (props) => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
);

export default CustomButton;
