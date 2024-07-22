import React from "react";
import Wrapper from "../assets/wrappers/MilestoneCard";

const MilestoneCard = ({ title, desc, img }) => {
  return (
    <Wrapper>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </Wrapper>
  );
};

export default MilestoneCard;
