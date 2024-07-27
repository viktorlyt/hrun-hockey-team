import styled from "styled-components";
import heroImageDark from "../images/main-picture_dark.png";
import heroImageLight from "../images/main-picture_light.png";

const Wrapper = styled.div`
  height: 90vh;
  overflow: hidden;

  @media (max-width: 1350px) {
    height: 75vh;
  }

  @media (max-width: 1024px) {
    height: 65vh;
  }

  @media (max-width: 600px) {
    height: 32vh;
  }

  @media (max-width: 500px) {
    height: 98vh;
  }

  .hero-image {
    position: relative;
    height: 106%;
    background-image: ${(props) =>
      props.theme === "dark"
        ? `url(${heroImageDark})`
        : `url(${heroImageLight})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 1350px) {
      height: 90%;
    }

    @media (max-width: 1024px) {
      height: 85%;
    }

    @media (max-width: 768px) {
      height: 70%;
    }

    @media (max-width: 600px) {
      height: 101%;
    }

    @media (max-width: 500px) {
      height: 51%;
    }
  }

  .content-wrapper {
    @media (max-width: 500px) {
      background-color: var(--bg-color-o-b);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem 1rem 1rem;
      gap: 2rem;
      margin-top: -2rem;
    }
  }

  .home-socials-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: calc(100vw / 28);
    top: 34%;

    @media (max-width: 1450px) {
      left: calc(100vw / 70);
      top: 40%;
    }

    @media (max-width: 1350px) {
      top: 25%;
    }

    @media (max-width: 1024px) {
      left: calc(100vw / 7);
      top: 45%;
    }

    @media (max-width: 900px) {
      top: 45%;
    }

    @media (max-width: 768px) {
      top: 35%;
    }

    @media (max-width: 600px) {
      top: 26%;
    }

    @media (max-width: 500px) {
      background-color: var(--bg-color-o-b);
      display: unset;
      flex-direction: unset;
      position: unset;
      top: unset;
      left: unset;
    }

    a {
      padding: 0.2rem;
      border-radius: 50%;
      transition: all 0.3s ease-in;
      font-size: 3rem;
      color: var(--ocean-dark);
      transform: scale(1.2);

      @media (max-width: 1024px) {
        font-size: 2rem;
      }

      @media (max-width: 600px) {
        font-size: 1.6rem;
      }

      @media (max-width: 500px) {
        font-size: 2.5rem;
      }
    }

    a:hover {
      transform: scale(1.3);
    }

    .socials-text {
      color: var(--text-color-o-b40);
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-align: center;
      margin-bottom: 1rem;
      padding: 1rem;

      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  .tickets-section {
    position: absolute;
    top: 60%;
    right: calc(100vw / 12);
    max-width: 410px;

    @media (max-width: 1350px) {
      right: calc(100vw / 40);
      top: 44%;

      h3 {
        margin-bottom: 0;
      }

      p {
        margin: 0.5rem 0;
      }
    }

    @media (max-width: 1024px) {
      max-width: 250px;
      right: calc(100vw / 50);
      top: 37%;

      h3 {
        font-size: calc(var(--h3-font-size) * 0.7);
        line-height: calc(var(--h3-line-height) * 0.7);
      }

      p {
        font-size: calc(var(--b1-font-size) * 0.7);
        line-height: calc(var(--b1-line-height) * 0.7);
      }
    }

    @media (max-width: 900px) {
      max-width: 280px;
      right: calc(100vw / 50);
      top: 38%;
    }

    @media (max-width: 768px) {
      top: 29%;
      max-width: 230px;

      h3 {
        font-size: calc(var(--h3-font-size) * 0.6);
        line-height: calc(var(--h3-line-height) * 0.6);
      }

      p {
        font-size: calc(var(--b1-font-size) * 0.6);
        line-height: calc(var(--b1-line-height) * 0.6);
      }
    }

    @media (max-width: 600px) {
      top: 22%;
      max-width: 180px;

      h3 {
        font-size: calc(var(--h3-font-size) * 0.45);
        line-height: calc(var(--h3-line-height) * 0.45);
      }

      p {
        font-size: calc(var(--b1-font-size) * 0.45);
        line-height: calc(var(--b1-line-height) * 0.45);
      }
    }

    @media (max-width: 500px) {
      background-color: var(--bg-color-o-b);
      position: unset;
      top: unset;
      right: unset;
      max-width: unset;

      h3 {
        font-size: calc(var(--h3-font-size) * 1);
        line-height: calc(var(--h3-line-height) * 1);
      }

      p {
        font-size: calc(var(--b1-font-size) * 1);
        line-height: calc(var(--b1-line-height) * 1);
      }
    }

    .buy-ticket {
      width: 100%;

      @media (max-width: 1024px) {
        font-size: calc(var(--b2-font-size) * 0.7);
        line-height: calc(var(--b2-line-height) * 0.7);
      }

      @media (max-width: 768px) {
        font-size: calc(var(--b2-font-size) * 0.6);
        line-height: calc(var(--b2-line-height) * 0.6);
        margin: 0;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }

      @media (max-width: 600px) {
        font-size: calc(var(--b2-font-size) * 0.45);
        line-height: calc(var(--b2-line-height) * 0.45);
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
      }

      @media (max-width: 500px) {
        font-size: calc(var(--b2-font-size) * 1);
        line-height: calc(var(--b2-line-height) * 1);
      }
    }
  }
`;

export default Wrapper;
