import React from "react";
import Wrapper from "../assets/wrappers/CoachCard";

const CoachCard = ({ firstName, lastName, position, bio }) => {
  return (
    <Wrapper>
      <img
        src={`/assets/images/coach_${firstName}_${lastName}.png`}
        alt={`${firstName} ${lastName}`}
      />
      <h2>
        {firstName} {lastName}
      </h2>
      <p className="b1">{position}</p>
      <p className="b2">{bio}</p>
    </Wrapper>
  );
};

export default CoachCard;
