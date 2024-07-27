import styled from "styled-components";
import heroImageDark from "../assets/images/main-picture_dark.png";
import heroImageLight from "../assets/images/main-picture_light.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: ${(props) =>
    props.theme === "dark"
      ? `url(${heroImageDark})`
      : `url(${heroImageLight})`};
  padding: 20px;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;

  .social-media-icons {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    gap: 10px;
  }

  .ticket-link {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    z-index: 10;
  }
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="social-media-icons">
        <FaFacebook size={30} color="#fff" />
        <FaTwitter size={30} color="#fff" />
        <FaInstagram size={30} color="#fff" />
      </div>
      <a href="/buy-tickets" className="ticket-link">
        Buy Tickets
      </a>
    </Wrapper>
  );
};

export default HeroSection;
