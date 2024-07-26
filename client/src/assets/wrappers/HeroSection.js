import styled from "styled-components";
import heroImageDark from "../images/main-picture_dark.png";
import heroImageLight from "../images/main-picture_light.png";

const Wrapper = styled.div`
  background-color: var(--bg-color-o-b);
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${(props) =>
      props.theme === "dark"
        ? `url(${heroImageDark})`
        : `url(${heroImageLight})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--bg-color-o-b);
  }

  .content-wrapper {
    border: 3px solid var(--bg-color-o-b);
    /* background-color: var(--bg-color-o-b); */
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .home-socials-container {
    align-self: flex-start;
    display: flex;
    flex-direction: column;

    a {
      padding: 0.2rem;
      border-radius: 50%;
      transition: all 0.3s ease-in;
      /* display: inline-block; */
      font-size: 3rem;
      color: var(--ocean-dark);
      transform: scale(1.2);
    }

    a:hover {
      transform: scale(1.3);
    }

    .socials-text {
      color: var(--text-color-o-b40);
      writing-mode: vertical-rl;
      text-align: center;
      margin-bottom: 1rem;
      transform: rotate(180deg);
      padding: 0.5rem;
      border-radius: 1rem;
    }
  }

  .tickets-section {
    align-self: flex-end;
    max-width: 410px;

    @media (max-width: 768px) {
      align-self: center;
      text-align: center;
      margin-top: 20px;
    }

    .buy-ticket {
      width: 100%;
    }
  }
`;

export default Wrapper;
