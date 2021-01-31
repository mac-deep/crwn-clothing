import styled, { css } from "styled-components";

const buttonStyles = css`
  background: #000;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: none;

  &:hover {
    background: #000;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  outline: none;

  &:hover {
    background-color: transparent;
    border: 1px solid #357ae8;
    color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogle) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s ease;
  ${getButtonStyles}
`;
