import styled from "styled-components";

const Wrapper = styled.header`
  padding: 0 4rem;

  h1,
  p {
    width: 50%;
  }

  h1 {
    text-align: start;
    margin-top: 2rem;
    margin-bottom: 0;
  }

  nav {
    display: flex;
    justify-content: start;
    gap: 3rem;
    width: fit-content;
    border-bottom: 1px solid var(--black-20);
    margin: 2rem 0;
  }

  nav a {
    text-decoration: none;
    color: var(--text-color-secondary);
    white-space: nowrap;
    position: relative;
    padding: 0 1rem 0.5rem 1rem;
    transition: color 0.3s ease, font-weight 0.3s ease;
  }

  nav a::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--text-color-secondary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  nav a:hover,
  nav a.active-link {
    font-weight: bold;
    font-family: "Inter";
    font-size: 18pt;
  }

  nav a:hover::after,
  nav a.active-link::after {
    transform: scaleX(1);
  }

  .game-range {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    align-items: start;
    justify-content: start;
    width: fit-content;
    margin: 2rem 0;
  }

  .filters-container {
    display: flex;
    justify-items: start;
    align-items: center;
    gap: 2.7rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .filters-container .filter {
    margin: 0;
  }

  @media (max-width: 1600px) {
    nav {
      margin: 1rem 0;
    }
  }

  @media (max-width: 1450px) {
  }

  @media (max-width: 1343px) {
    padding: 0 3rem;
  }

  @media (max-width: 1200px) {
    nav a,
    nav NavLink {
      padding: 0.5rem 0.3rem;
    }

    .filters-container {
      gap: 1rem;
    }
  }

  @media (max-width: 960px) {
    nav {
      gap: 2.5rem;
    }

    nav a,
    nav NavLink {
      padding: 0 0 0.5rem 0;
      margin: 0;
    }

    .dropdown-icon {
      font-size: 1.4rem;
    }

    .selected-value {
      padding: 0 1rem;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem;

    nav {
      gap: 2rem;
    }

    .filters-container {
      flex-direction: column;
      justify-items: center;
      align-items: stretch;
      margin-bottom: 1rem;
    }

    .dropdown-icon {
      font-size: 2rem;
    }

    .selected-value {
      padding: 0 2rem;
    }

    .game-range {
      gap: 2rem;
    }
  }

  @media (max-width: 510px) {
    padding: 1rem;

    nav {
      gap: 1rem;
    }

    .game-range > button {
      padding: 0.7rem 1.4rem;
    }
  }
`;

export default Wrapper;
