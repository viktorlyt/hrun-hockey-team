import styled from "styled-components";

const Wrapper = styled.div`
  .home-section {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url("src/assets/images/main-picture.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--background-color);
    text-align: center;
    overflow: hidden;
  }

  .tickets-section {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    background-color: var(--semi-transparent-black-7);
    padding: 1.5rem;
    border-radius: 10px;
    max-width: 300px;
    text-align: left;
  }

  .tickets-section h3 {
    margin-top: 0;
    color: var(--primary-300);
  }

  .tickets-section p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .buy-ticket {
    background-color: var(--primary-500);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .buy-ticket:hover {
    background-color: var(--primary-600);
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
    left: 1rem;
    top: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-left: 3rem;
  }

  .home-socials-container .socials-container a {
    background-color: var(--semi-transparent-white-2);
    padding: 0.2rem;
    border-radius: 50%;
  }

  .socials-container a {
    transform: scale(1.2);
    background-color: var(--semi-transparent-white-2);
  }

  .socials-text {
    writing-mode: vertical-rl;
    text-align: center;
    margin-bottom: 1rem;
    transform: rotate(180deg);
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.5rem;
    border-radius: 1rem;
  }

  .socials-text div {
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    .tickets-section {
      bottom: 1rem;
      right: 1rem;
      left: 1rem;
      max-width: none;
    }
  }
`;

export default Wrapper;
