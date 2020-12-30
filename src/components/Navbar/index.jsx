import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import sr from "./../../services/ScrollReveal";
import { Bars,Scooter, Nav,NavIconBars,NavIconScooter,NavLink } from "./NavbarElements";


const Navbar = ({ toggle }) => {
  
  useEffect(() => {
    /*SCROLL Navbar*/
    sr.reveal(".nav-header", {});
  });

  const counter = useSelector(state => state.counter);
  
  return (
    <>
      <Nav>       
        <NavLink className="nav-header" to='/'>Pizza Planet</NavLink>
        <NavIconBars onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIconBars>
        <NavIconScooter to='/'>
          <span>{counter}</span>
          <Scooter/>
        </NavIconScooter>
      </Nav> 
    </>
  );
};

export default Navbar;
