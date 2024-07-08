import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import NewsCardNews from "../components/NewsCardNews";
import Wrapper from "../assets/wrappers/News";
import customFetch from "../utils/customFetch";
import { shouldUseMockData } from "../utils/environment";
import { mockNews } from "../data/mockData.js";

export const loader = async ({ request }) => {
  try {
    if (shouldUseMockData) {
      return { data: { news: mockNews } };
    }
    const { data } = await customFetch.get("/news");
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const News = () => {
  const { data } = useLoaderData();
  const news = data.news || [];

  return (
    <Wrapper>
      <h1>Top Stories</h1>
      <div className="news-container">
        {news.map((n) => (
          <NewsCardNews
            key={n.newsId}
            id={n.newsId}
            img={n.images[0]}
            date={n.date}
            title={n.title}
            content={n.content}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default News;
