import React from "react";
import Wrapper from "../assets/wrappers/ProductAndNewsCardHome";

const ProductCard = ({ id, imageSrc, price, name }) => {
  return (
    <Wrapper to={`/shop/${id}`}>
      <div className="image-container">
        <img src={imageSrc} alt="Product Picture" />
      </div>
      <p className="b1 product-name">{name}</p>
      <p className="b2 price">{price}$</p>
    </Wrapper>
  );
};

export default ProductCard;
