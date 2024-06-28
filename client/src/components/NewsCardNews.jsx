import React from "react";
import Wrapper from "../../public/assets/wrappers/NewsCardNews";
import { Link } from "react-router-dom";

const NewsCardNews = ({ id, date, img, title, content }) => {
  const dateObject = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject
  );

  const truncateContent = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    return `${truncated.slice(0, lastSpaceIndex)} ...`;
  };

  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className="image-container">
        <img src={img} alt={title} />
      </div>
      <p>{truncateContent(content, 305)}</p>
      <button className="read-more">
        <Link to={`/news/${id}`}>Read more</Link>
      </button>
    </Wrapper>
  );
};

export default NewsCardNews;
