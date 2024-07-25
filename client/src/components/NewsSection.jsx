import React from "react";
import { Link } from "react-router-dom";
import NewsCardHome from "./NewsCardHome";
import Wrapper from "../assets/wrappers/HomePageSections";

const NewsSection = ({ latestNews }) => {
  return (
    <Wrapper>
      <div className="home-page-section news">
        <h1 className="section-title">Latest News</h1>
        <div className="home-page-section-container">
          {latestNews.map((n) => (
            <NewsCardHome
              key={n.newsId}
              id={n.newsId}
              date={n.date}
              title={n.title}
              img={n.images[0]}
            />
          ))}
        </div>
        <div className="button-container">
          <button>
            <Link to="/news">See All News</Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewsSection;
