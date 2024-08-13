import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--bg-color);

  /* .home-section {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: var(--main-picture);
    background-color: var(--color-ol-bd);
    background-repeat: no-repeat;
    background-position: center;
    //border: 1px solid red;
  }

  .home-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: var(--main-picture);
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    z-index: -1;
  }

  @media (min-aspect-ratio: 16/9) {
    .home-section {
      background-size: cover;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    .home-section {
      background-size: contain;
    }
  }

  .home-socials-container {
    position: absolute;
    left: calc(100vw / 60);
    top: 38%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-left: 3rem;
  }

  .home-socials-container .socials-container a {
    padding: 0.2rem;
    border-radius: 50%;
    transition: all 0.3s ease-in;
    //display: inline-block;
  }

  .home-socials-container .socials-container a:hover {
    transform: scale(1.3);
  }

  .socials-container a {
    font-size: 3rem;
    color: var(--ocean-dark);
    transform: scale(1.2);
  }

  .socials-text {
    color: var(--color-od-b40);
    writing-mode: vertical-rl;
    text-align: center;
    margin-bottom: 1rem;
    transform: rotate(180deg);
    padding: 0.5rem;
    border-radius: 1rem;
  }

  .tickets-section {
    position: absolute;
    bottom: calc(100vw / 50);
    right: calc(100vw / 12);
    padding: 0;
    border-radius: 10px;
    max-width: 410px;
    text-align: left;
  }

  .tickets-section p {
    margin-bottom: 3rem;
  }

  .buy-ticket {
    width: 100%;
  }

  @media (max-width: 1600px) {
    .home-socials-container {
      left: calc(100vw / 200);
      top: 25%;
    }
    .tickets-section {
      bottom: calc(100vw / 30);
    }
  }

  @media (max-width: 1350px) {
    .home-section,
    .home-section::before {
      //background-position: start;
    }
    //.home-socials-container {
    //  left: calc(100vw / 200);
     // top: 25%;
    //}
    //.tickets-section {
     // bottom: calc(100vw / 30);
    //}
  }

  @media (max-width: 768px) {
    .tickets-section {
      bottom: 1rem;
      right: 1rem;
      left: 1rem;
      max-width: none;
    }

    .home-socials-container {
      left: 0.5rem;
      margin-left: 0;
    }

    .socials-container a {
      font-size: 2rem;
    }

    .socials-text {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .home-section {
      height: calc(100vh - 5rem);
    }

    .tickets-section {
      bottom: 1rem;
      left: 1rem;
      right: 1rem;
      padding: 1rem;
    }

    .tickets-section h3 {
      font-size: calc(var(--h3-font-size) * 0.75);
      line-height: calc(var(--h3-line-height) * 0.75);
    }

    .tickets-section p {
      font-size: calc(var(--b1-font-size) * 0.75);
      line-height: calc(var(--b1-line-height) * 0.75);
    }
  } */
`;

export default Wrapper;
