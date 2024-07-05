import React from "react";
import Wrapper from "../assets/wrappers/CoachCard";

const CoachCard = ({ firstName, lastName, position, bio }) => {
  return (
    <Wrapper>
      <img
        src={`/assets/images/coach_${firstName}_${lastName}.jpg`}
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

export default CoachCard;
