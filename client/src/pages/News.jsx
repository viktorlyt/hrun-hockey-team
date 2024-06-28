import React from "react";
import NewsCardNews from "../components/NewsCardNews";
import Wrapper from "../../public/assets/wrappers/News";

const news = [
  {
    id: 1,
    date: "2024-06-01T00:00:00Z",
    img: "../../public/assets/images/news_1.jpg",
    title: "2024 BCHL Annual General Meeting Recap",
    description: "",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as",
  },
  {
    id: 2,
    date: "2024-05-25T00:00:00Z",
    img: "../../public/assets/images/news_2.jpg",
    title: "Brooks Bandits win 2024 Rocky Mountain Challenge",
    description: "",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
  },
  {
    id: 3,
    date: "2024-04-08T00:00:00Z",
    img: "../../public/assets/images/news_3.jpg",
    title: "2024 BCHL Annual General Meeting Recap",
    description: "",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
  },
  {
    id: 4,
    date: "2024-06-01T00:00:00Z",
    img: "../../public/assets/images/news_4.jpg",
    title: "Brooks Bandits win 2024 Rocky Mountain Challenge",
    description: "",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
  },
  {
    id: 5,
    date: "2024-05-25T00:00:00Z",
    img: "../../public/assets/images/news_5.jpg",
    title: "Brooks Bandits win 2024 Rocky Mountain Challenge",
    description: "",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
  },
  {
    id: 6,
    date: "2024-04-08T00:00:00Z",
    img: "../../public/assets/images/news_6.jpg",
    title: "Brooks Bandits win 2024 Rocky Mountain Challenge",
    description: "",
    content:
      "Davin Beer The Brooks Bandits defeated the Surrey Eagles 4-1 in Game 2 of the Rocky Mountain Challenge to sweep the best-of-three series. 2003-born forward Hunter Wallace scored his second goal of the series to open the scoring for Brooks 6:32 into the first period. He was named the game’s first star, as ...",
  },
];

const News = () => {
  return (
    <Wrapper>
      <h1>Top Stories</h1>
      <div className="news-container">
        {news.map((n) => (
          <NewsCardNews
            key={n.id}
            id={n.id}
            img={n.img}
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
