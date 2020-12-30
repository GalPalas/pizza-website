import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIconBars = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const NavIconScooter = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  span {
    font-size: 1.2rem;
    margin-left: 4rem;
    transform: translate(-150%, 25%);
    font-weight: bold;
  }
`;

export const Scooter = styled(GiScooter)`
  font-size: 2.5rem;
  transform: translate(45%, 25%);
`;
