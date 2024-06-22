import Wrapper from "../assets/wrappers/Home";
import Socials from "../components/Socials";
import ProductsSection from "../components/ProductsSection";
import UpdatesSection from "../components/UpdatesSection";
import Logo from "../components/Logo";

const Home = () => {
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
    </Wrapper>
  );
};

export default Home;
