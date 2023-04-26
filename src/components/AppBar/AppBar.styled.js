import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBg = styled.div`
  display: flex;

  align-items: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 34, 1) 26%,
    rgba(34, 81, 140, 1) 100%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  height: 10vh;
`;
export const NavStyled = styled.nav`
  width: 100%;
`;
export const NavigationList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BarLinks = styled(NavLink)`
  color: #1ab2de;
  font-size: 28px;
  font-weight: 600;
  padding: 5px 5px;
  &.active {
    color: #fcb045;
    border-radius: 10px;

    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3;
  }
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
