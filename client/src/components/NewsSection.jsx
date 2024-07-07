import React from "react";
import { Link } from "react-router-dom";
import NewsCardHome from "./NewsCardHome";
import Wrapper from "../assets/wrappers/HomePageSections";

const NewsSection = ({ latestNews }) => {
  return (
    <Wrapper>
      <div className="home-page-section">
        <h2 className="section-title">Latest News</h2>
        <div className="home-page-section-container">
          {latestNews.map((n) => (
            <NewsCardHome
              key={n.newsId}
              id={n.newsId}
              date={n.date}
              title={n.title}
              description={n.abstract}
              content={n.content}
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
