import React from "react";
import Wrapper from "../assets/wrappers/ProductCardShop";

const ProductCard = ({
  id,
  name,
  imageSrc,
  minPrice,
  maxPrice,
  category,
  type,
  colors,
  sizes,
}) => {
  return (
    <Wrapper to={`/shop/${id}`}>
      <img src={imageSrc} alt="Product Picture" />
      <p className="b1 product-name">
        {name} - {category}
      </p>
      <p className="b2">
        {minPrice === maxPrice
          ? `${minPrice}`
          : `${minPrice} $CAD - ${maxPrice}`}{" "}
        $CAD
      </p>
    </Wrapper>
  );
};

export default ProductCard;
