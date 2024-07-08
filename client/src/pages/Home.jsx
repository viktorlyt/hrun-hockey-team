import Wrapper from "../assets/wrappers/Home";
import Socials from "../components/Socials";
import UpdatesSection from "../components/UpdatesSection";
import ProductsSection from "../components/ProductsSection";
import NewsSection from "../components/NewsSection";
import ContactFormSection from "../components/ContactFormSection";
import Logo from "../components/Logo";
import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { shouldUseMockData } from "../utils/environment.js";
import { mockLatestNews } from "../data/mockData.js";

export const loader = async ({ request }) => {
  try {
    if (shouldUseMockData) {
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

const Home = () => {
  const { data } = useLoaderData();
  const latestNews = data.news || [];

  return (
    <Wrapper>
      <div className="home-section">
        <div className="home-section-content">
          <div className="home-socials-container">
            <Socials className="column" />
            <div className="socials-text">
              <div>We are available</div>
              <div>on the platform</div>
            </div>
          </div>
        </div>
        <div className="tickets-section">
          <h3>Stay Ahead of All Events</h3>
          <p>
            Be the first to know about upcoming events and never miss out on the
            excitement. Click below to buy your tickets today!
          </p>
          <button className="buy-ticket">Buy A Ticket</button>
        </div>
      </div>
      <UpdatesSection />
      <ProductsSection />
      <NewsSection latestNews={latestNews} />
      <div id="contact-us-section">
        <ContactFormSection />
      </div>
    </Wrapper>
  );
};

export default Home;
