import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media (max-width: 600px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 80%;
    font-size: 14px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 5px 10px;
  margin-right: 10px;
  font-weight: 500;
  transition: all 0.1s ease;
  text-transform: uppercase;

  &:hover {
    border-bottom: 2px solid black;
  }

  @media (max-width: 600px) {
    padding: 5px;
  }
`;
