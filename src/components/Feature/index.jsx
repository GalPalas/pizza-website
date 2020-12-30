import React,{useEffect} from "react";
import sr from "./../../services/ScrollReveal";
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {

  useEffect(() => {
    /*SCROLL Feature*/
    sr.reveal(".feature-h1", {});
    sr.reveal(".feature-p", { delay: 400 });
    sr.reveal(".feature-button", { delay: 400 });
  });

  return (
    <FeatureContainer>
      <h1 className="feature-h1">Pizza of the Day</h1>
      <p className="feature-p">Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton className="feature-button">Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
