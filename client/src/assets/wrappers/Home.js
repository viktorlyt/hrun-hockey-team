import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--bg-color);

  .home-section {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: var(--main-picture);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
  }

  .tickets-section {
    position: absolute;
    bottom: 4rem;
    right: calc(100vw / 9);
    padding: 0;
    border-radius: 10px;
    max-width: 410px;
    text-align: left;
  }

  .tickets-section p {
    margin-bottom: 3rem;
  }

  .buy-ticket {
    width: 400px;
  }

  .home-section-content {
    z-index: 1;
  }

  .socials-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .home-socials-container {
    position: absolute;
    left: 2rem;
    top: 28%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-left: 3rem;
  }

  .home-socials-container .socials-container a {
    /* background-color: var(--bg-color-transparent-secondary); */
    padding: 0.2rem;
    border-radius: 50%;
    transition: all 0.3s ease-in;
    /* display: inline-block; */
  }

  .home-socials-container .socials-container a:hover {
    transform: scale(1.3);
  }

  .socials-container a {
    font-size: 3rem;
    color: var(--text-color-secondary);
    /* background-color: var(--bg-color-transparent-secondary); */
    transform: scale(1.2);
  }

  .socials-text {
    color: var(--text-color-secondary);
    writing-mode: vertical-rl;
    text-align: center;
    margin-bottom: 1rem;
    transform: rotate(180deg);
    padding: 0.5rem;
    border-radius: 1rem;
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

    .socials-text {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .home-section {
      height: calc(100vh - 5rem);
    }

    .home-socials-container {
      top: auto;
      bottom: 5rem;
      left: 1rem;
      right: 1rem;
      flex-direction: row;
    }

    .socials-container {
      flex-direction: row;
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
  }
`;

export default Wrapper;
