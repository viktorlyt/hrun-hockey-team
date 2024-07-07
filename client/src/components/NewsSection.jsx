import React from "react";
import NewsCardHome from "./NewsCardHome";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomePageSections";
import customFetch from "../utils/customFetch";
import { useMockData } from "../utils/environment";
import { mockLatestNews } from "../data/mockData.js";

export const loader = async ({ request }) => {
  try {
    if (useMockData) {
      return { data: { news: mockLatestNews } };
    }
    const { data } = await customFetch.get("/news/recent");
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const NewsSection = () => {
  const { data } = useLoaderData();
  const news = data.news || [];

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
