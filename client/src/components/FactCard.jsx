import React from "react";
import Wrapper from "../assets/wrappers/FactCard";

const FactCard = ({ total, title, content }) => {
  return (
    <Wrapper>
      <h3>{total}+</h3>
      <h4>Total {title}</h4>
      <p>{content}</p>
    </Wrapper>
  );
};

export default FactCard;
