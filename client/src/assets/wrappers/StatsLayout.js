import styled from "styled-components";

const Wrapper = styled.header`
  padding: 1rem;
  padding-top: 8rem;
  margin: 2rem 4rem;

  h1,
  p {
    width: 50%;
  }

  h1 {
    text-align: start;
    margin-top: 2rem;
    margin-bottom: 0;
    /* font-size: 2.5rem; */
  }

  nav {
    display: flex;
    justify-content: start;
    gap: 4rem;
    width: fit-content;
    border-bottom: 1px solid var(--text-color-transparent-secondary);
    margin: 2rem 1rem;
  }

  .nav NavLink {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    white-space: nowrap;
  }

  .nav a:hover,
  .nav NavLink:hover {
    color: var(--primary-500);
    text-decoration: underline;
  }

  .active-link {
    font-weight: 800;
    text-decoration: underline;
    color: var(--primary-500);
  }

  @media (max-width: 1820px) {
    .nav {
    }
  }

  @media (max-width: 1600px) {
    .nav {
      margin: 1rem 4rem;
    }
  }

  @media (max-width: 1450px) {
    .nav {
      margin: 1rem 3rem;
    }
  }

  @media (max-width: 1343px) {
    padding: 0.5rem 1rem;
    height: 6rem;

    .nav {
      margin: 1rem 2rem;
      padding: 0;
    }

    .nav a,
    .nav NavLink {
      padding: 0.5rem 0.3rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 1200px) {
    .nav {
      margin: 1rem 1rem;
      padding: 0;
    }

    .nav a,
    .nav NavLink {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 960px) {
    .nav {
      margin: 1rem 0.2rem;
      padding: 0;
    }
    .nav a,
    .nav NavLink {
      padding: 0.5rem 0.1rem;
      font-size: 0.8rem;
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    height: 5rem;
    position: fixed;
    width: 100%;

    .nav {
      position: fixed;
      top: 5rem;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: var(--background-color);
      padding: 0.5rem 0;
      display: none;
      z-index: 1000;
      max-height: calc(100vh - 5rem);
      overflow-y: auto;
    }

    .nav.show-menu {
      display: flex;
    }

    .nav a,
    .nav NavLink {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export default Wrapper;
