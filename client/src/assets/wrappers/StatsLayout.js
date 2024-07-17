import styled from "styled-components";

const Wrapper = styled.header`
  padding: 1rem;
  padding-top: 8rem;
  margin: 1rem 4rem;

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
    border-bottom: 1px solid var(--grey-200);
    margin: 2rem 1rem;
  }

  nav a {
    text-decoration: none;
    font-size: 1.2rem;
    white-space: nowrap;
    position: relative;
    padding-bottom: 0.5rem;
    transition: color 0.3s ease, font-weight 0.3s ease;
  }

  nav a::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-500);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  nav a:hover,
  nav a.active-link {
    color: var(--primary-500);
    font-weight: bold;
  }

  nav a:hover::after,
  nav a.active-link::after {
    transform: scaleX(1);
  }

  @media (max-width: 1600px) {
    nav {
      margin: 1rem 4rem;
    }
  }

  @media (max-width: 1450px) {
    nav {
      margin: 1rem 3rem;
    }
  }

  @media (max-width: 1343px) {
    padding: 4rem 1rem;

    nav {
      margin: 1rem 1rem;
      padding: 0;
    }
  }

  @media (max-width: 1200px) {
    nav {
      margin: 1rem 1rem;
      padding: 0;
    }

    nav a,
    nav NavLink {
      padding: 0.5rem 0.3rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 960px) {
    nav {
      margin: 1rem 0.2rem;
      padding: 0;
      gap: 2.5rem;
    }

    /* nav a,
    nav NavLink {
      padding: 0;
      margin: 0.5rem 0;
    } */

    nav a,
    nav NavLink {
      padding: 0 0 0.5rem 0;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem;

    nav {
      gap: 2rem;
    }
  }

  @media (max-width: 510px) {
    padding: 2rem 0.5rem;

    nav {
      gap: 1rem;
    }
  }
`;

export default Wrapper;
