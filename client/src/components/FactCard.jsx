import React from "react";
import Wrapper from "../assets/wrappers/FactCard";

const FactCard = ({ total, title, content }) => {
  return (
    <Wrapper>
      <h2>{total}+</h2>
      <h4>Total {title}</h4>
      <p className="b2">{content}</p>
    </Wrapper>
  );
};

export default FactCard;
