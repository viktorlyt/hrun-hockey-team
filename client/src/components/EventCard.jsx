import React from "react";
import Wrapper from "../assets/wrappers/EventCard";
import { Link } from "react-router-dom";

const EventCard = ({ id, name, dates, location, price, img }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="b1 date-location">
          {dates} at {location}
        </p>
        <p className="b3 price">Passes Now for ${price} + taxes and fees!</p>
        <button className="b2 selected buy-passes">
          <Link to={`/tickets/${id}`}>Buy Passes</Link>
        </button>
      </div>
    </Wrapper>
  );
};

export default EventCard;
