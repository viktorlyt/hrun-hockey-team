import React from "react";
import Wrapper from "../assets/wrappers/ProductAndNewsCard";

const NewsCard = ({ id, date, title, description }) => {
  const dateObject = new Date(date);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject
  );

  return (
    <Wrapper to={`/news#${id}`}>
      <div className="container">
        <div className="news-date">{formattedDate}</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="news-title">{title}</div>
      </div>
    </Wrapper>
  );
};

export default NewsCard;
