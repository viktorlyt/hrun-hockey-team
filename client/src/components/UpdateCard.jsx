import React from "react";
import Wrapper from "../assets/wrappers/UpdateCard";

const UpdateCard = ({
  id,
  title,
  league1,
  league1Img,
  league2,
  league2Img,
  date,
  league1Score,
  league2Score,
}) => {
  return (
    <Wrapper to={`#`}>
      <div className="update-header">
        <h3>{title}</h3>
        <p className="b3">{date}</p>
      </div>
      <div className="update-results">
        <div className="league">
          <img src={league1Img} alt={league1} />
          <h4>{league1}</h4>
        </div>
        <h4>
          {league1Score} - {league2Score}
        </h4>
        <div className="league">
          <img src={league2Img} alt={league2} />
          <h4>{league2}</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default UpdateCard;
