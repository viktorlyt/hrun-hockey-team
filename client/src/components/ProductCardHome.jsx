import React from "react";
import Wrapper from "../assets/wrappers/ProductAndNewsCardHome";

const ProductCard = ({ id, imageSrc, price, name }) => {
  return (
    <Wrapper to={`/shop/${id}`}>
      <div className="image-container">
        <img src={imageSrc} alt="Product Picture" />
      </div>
      <div className="container">
        <h5>${price}</h5>
        <h5>{name}</h5>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
