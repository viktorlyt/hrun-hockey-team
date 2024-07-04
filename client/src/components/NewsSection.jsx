import React from "react";
import NewsCardHome from "./NewsCardHome";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomePageSections";

const latestNews = [
  {
    id: 1,
    date: "2024-06-01T00:00:00Z",
    title: "Brooks Bandits win 2024 Rocky Mountain Challenge",
    description: "",
    content: "",
  },
  {
    id: 2,
    date: "2024-05-25T00:00:00Z",
    title: "Fred Page Cup Finals Recap: Game 5",
    description: "",
    content: "",
  },
  {
    id: 3,
    date: "2024-04-08T00:00:00Z",
    title: "Fred Page Cup Finals Recap: Game 4",
    description: "",
    content: "",
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <div className="home-page-section">
        <h2 className="section-title">Latest News</h2>
        <div className="home-page-section-container">
          {latestNews.map((n) => (
            <NewsCardHome
              key={n.id}
              id={n.id}
              date={n.date}
              title={n.title}
              description={n.description}
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
