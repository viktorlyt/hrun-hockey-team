import React from "react";
import Wrapper from "../assets/wrappers/GroupCard";
import { Link } from "react-router-dom";

const GroupCard = ({ id, name, minAge, maxAge, decription, img }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <div className="info">
        <h3 className="name">{name}</h3>
        <h4 className="age">
          {minAge} - {maxAge} years
        </h4>
        <p className="desc">{decription}</p>
        <button className="registration">
          <Link to={`/registration/${id}`}>Register here</Link>
        </button>
      </div>
    </Wrapper>
  );
};

export default GroupCard;
