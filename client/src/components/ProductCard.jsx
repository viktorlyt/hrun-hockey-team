import React from "react";
import Wrapper from "../assets/wrappers/ProductAndNewsCard";

const ProductCard = ({ id, imageSrc, price, productName }) => {
  return (
    <Wrapper to={`/shop/${id}`}>
      <div className="image-container">
        <img src={imageSrc} alt="Product Picture" />
      </div>
      <div className="container">
        <h5>${price}</h5>
        <h5>{productName}</h5>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
