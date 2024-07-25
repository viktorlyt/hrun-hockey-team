import React from "react";
import Wrapper from "../assets/wrappers/ProductAndNewsCardHome";

const NewsCardHome = ({ id, date, title, img }) => {
  const dateObject = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject
  );

  return (
    <Wrapper to={`/news#${id}`}>
      <div className="image-container">
        <img src={img} alt={title} />
        <div className="date-overlay b1">{formattedDate}</div>
      </div>
      <p className="b1 news-title">{title}</p>
    </Wrapper>
  );
};

export default NewsCardHome;
