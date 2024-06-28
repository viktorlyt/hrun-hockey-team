import React from "react";
import Wrapper from "../../public/assets/wrappers/CoachCard";

const FactCard = ({ firstName, lastName, position, bio }) => {
  return (
    <Wrapper>
      <img
        src={`../../public/assets/images/coach_${firstName}_${lastName}.jpg`}
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
