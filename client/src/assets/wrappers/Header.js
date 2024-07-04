import styled from "styled-components";

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: var(--background-color-transparent);
  color: var(--text-color);
  box-sizing: border-box;
  font-size: 1.1rem;
  max-width: 100%;
  overflow-x: hidden;

  .left-side {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }

  .logo-container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .logo-container img {
    height: 6rem; // Fixed height, adjust this value as needed
    width: auto;
    max-width: none; // Remove max-width constraint
    object-fit: contain;
  }

  .nav-center {
    display: flex;
    flex: 1;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 1rem 10rem;
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-center a,
  .nav-center NavLink {
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem;
    font-size: 1.1rem;
    white-space: nowrap;
  }

  .nav-center a:hover,
  .nav-center NavLink:hover {
    color: var(--primary-500);
    text-decoration: underline;
  }

  .active-link {
    font-weight: 800;
    text-decoration: underline;
    color: var(--primary-500);
  }

  .shop-btn {
    margin-left: 0.5rem;
    font-size: 2rem;
  }

  .menu-toggle {
    display: none;
    outline: none;
  }

  @media (max-width: 1820px) {
    .nav-center {
      margin: 1rem 6rem;
    }
  }

  @media (max-width: 1600px) {
    .nav-center {
      margin: 1rem 4rem;
    }
  }

  @media (max-width: 1450px) {
    .nav-center {
      margin: 1rem 3rem;
    }
  }

  @media (max-width: 1343px) {
    padding: 0.5rem 1rem;
    height: 6rem;

    .logo-container img {
      height: 4.5rem;
    }

    .nav-center {
      margin: 1rem 2rem;
      padding: 0;
    }

    .nav-center a,
    .nav-center NavLink {
      padding: 0.5rem 0.3rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 1200px) {
    .nav-center {
      margin: 1rem 1rem;
      padding: 0;
    }

    .nav-center a,
    .nav-center NavLink {
      font-size: 0.9rem;
    }

    .right-side {
      gap: 0.5rem;
    }

    .shop-btn {
      margin-left: 0.3rem;
      font-size: 1.7rem;
    }
  }

  @media (max-width: 960px) {
    .logo-container img {
      height: 3rem;
    }

    .nav-center {
      margin: 1rem 0.2rem;
      padding: 0;
    }

    .nav-center a,
    .nav-center NavLink {
      padding: 0.5rem 0.1rem;
      font-size: 0.8rem;
      margin-left: 0;
      margin-right: 0;
    }

    .dropdown {
      margin-right: 0.1rem;
    }

    .language {
      font-size: 0.9rem;
      min-width: 1rem;
    }

    .shop-btn {
      margin-left: 0.1rem;
      font-size: 1.5rem;
    }

    .right-side {
      gap: 0rem;
    }
  }

  /* @media (max-width: 1200px) { */
  @media (max-width: 768px) {
    height: 5rem;

    .logo-container img {
      height: 4rem;
    }

    .nav-center {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: var(--background-color);
      padding: 0.5rem 0;
      display: none;
    }

    .nav-center.show-menu {
      display: flex;
    }

    .nav-center a,
    .nav-center NavLink {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    .menu-toggle {
      display: block;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--text-color);
      cursor: pointer;
      padding: 0;
      margin-left: 1rem;
    }

    .right-side {
      gap: 1rem;
    }

    .shop-btn {
      margin-left: 0.5rem;
      font-size: 2rem;
    }

    .language {
      font-size: 1.1rem;
      min-width: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

    .logo-container img {
      height: 3rem; // Adjust for very small screens
    }

    .right-side {
      gap: 0.25rem;
    }

    .shop-btn {
      font-size: 1.5rem;
    }
  }
`;

export default Wrapper;
