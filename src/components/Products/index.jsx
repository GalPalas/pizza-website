import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { increment } from "./../../actions";
import sr from "./../../services/ScrollReveal";

import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => {

  useEffect(() => {
    /*SCROLL Products*/
    sr.reveal(".product-heading", {delay: 200});
    sr.reveal(".product-info", { delay: 400 });
    sr.reveal(".product-img", { interval: 200 });
  });

  const dispatch = useDispatch();

  return (
    <ProductsContainer className="products">
      <ProductsHeading className="product-heading">{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg className="product-img" src={product.img} alt={product.alt} />
              <ProductInfo className="product-info">
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton onClick={() => dispatch(increment())}>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
