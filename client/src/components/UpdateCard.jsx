import React from "react";
import Wrapper from "../../public/assets/wrappers/UpdateCard";

const UpdateCard = ({
  id,
  title,
  league1,
  league2,
  date,
  league1Score,
  league2Score,
}) => {
  return (
    <Wrapper to={`#`}>
      <div className="update-header">
        <h3 className="bold">{title}</h3>
        <p>{date}</p>
      </div>
      <div className="update-results">
        <h3 className="bold">{league1}</h3>
        <h3 className="bold">
          {league1Score} - {league2Score}
        </h3>
        <h3 className="bold">{league2}</h3>
      </div>
    </Wrapper>
  );
};

export default UpdateCard;
