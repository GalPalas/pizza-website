import React, {useState,useEffect} from "react";
import Navbar from "./../Navbar/index";
import Sidebar from './../Sidebar/index';
import sr from "./../../services/ScrollReveal";
import { HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from "./HeroElements";

const Hero = () => {

  useEffect(() => {
    /*SCROLL Hero*/
    sr.reveal(".hero-h1", {});
    sr.reveal(".hero-p", { delay: 400 });
    sr.reveal(".hero-btn", { delay: 400 });
  });
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1 className="hero-h1">Greatest Pizza Ever</HeroH1>
          <HeroP className="hero-p">Ready in 60 seconds</HeroP>
          <HeroBtn className="hero-btn">Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
    </>
  );
};

export default Hero;
