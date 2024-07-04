import React from "react";
import Wrapper from "../../public/assets/wrappers/CoachCard";

const getImagePath = (imageName) => {
  return import.meta.env.DEV
    ? `/public/assets/images/${imageName}`
    : `/assets/images/${imageName}`;
};

const FactCard = ({ firstName, lastName, position, bio }) => {
  return (
    <Wrapper>
      <img
        src={getImagePath(`${firstName}_${lastName}.jpg`)}
        alt={`${firstName} ${lastName}`}
      />
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{position}</p>
      <p>{bio}</p>
    </Wrapper>
  );
};

export default FactCard;
