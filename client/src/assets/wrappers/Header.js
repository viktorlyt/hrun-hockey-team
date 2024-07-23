import styled from "styled-components";

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  /* background-color: var(--bg-color-transparent); */
  background-color: transparent;
  color: var(--text-color-secondary);
  box-sizing: border-box;
  max-width: 100%;

  .left-side {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 150%;
  }

  .logo-container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .logo-container img {
    /* height: 8rem; */
    width: auto;
    max-width: none;
    object-fit: contain;
  }

  .nav-center {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 10rem;
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-center NavLink,
  /* .nav-center a, */
  .dropdown {
    text-decoration: none;
    padding: 0.5rem;
    font-size: 1.1rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .dropdown {
    position: relative;
    padding: 0;
  }

  .dropbtn {
    background-color: transparent;
    color: inherit;
    font-size: inherit;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    outline: none;
    height: 100%;
    padding: 0;
  }

  .nav-center a:hover,
  .nav-center .nav-center NavLink:hover,
  .dropbtn:hover,
  .active-link,
  .dropbtn.active-link,
  .dropdown-content .active-link {
    color: var(--primary);
    /* text-decoration: underline; */
  }

  .active-link {
    font-weight: 800;
    /* text-decoration: underline; */
  }

  .shop-btn {
    margin-left: 0.5rem;
    font-size: 26pt;
  }

  .menu-toggle {
    display: none;
    outline: none;
  }

  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--bg-color-secondary);
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1001; // Increased z-index to be above the header
    display: none; // Changed from 'block' to 'none'
    padding-top: 0.5rem; // Add some padding to separate from the header
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content a {
    color: var(--text-color-secondary);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    white-space: nowrap;
  }

  .dropdown-content a:hover {
    background-color: var(--grey-20);
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

    .right-side {
      gap: 0.5rem;
    }
  }

  @media (max-width: 1343px) {
    padding: 0.5rem 1rem;
    height: 6rem;

    .left-side {
      height: 100%;
    }

    .nav-center {
      margin: 1rem 2rem;
      padding: 0;
    }

    .nav-center a,
    .nav-center NavLink {
      padding: 0.5rem 0.3rem;
      /* font-size: 1rem; */
    }

    .dropbtn {
      /* font-size: 1rem; */
    }
  }

  @media (max-width: 1200px) {
    height: 5rem;
    position: fixed;
    width: 100%;

    .left-side {
      height: 150%;
    }

    .nav-center {
      position: fixed;
      top: 5rem;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: var(--bg-color-secondary);
      padding: 0.5rem 0;
      display: none;
      z-index: 1000;
      max-height: calc(100vh - 5rem);
      overflow-y: auto;
    }

    .nav-center.show-menu {
      display: flex;
      align-items: start;
    }

    .nav-center a,
    .nav-center NavLink {
      padding: 0.5rem 1rem;
    }

    .menu-toggle {
      display: block;
      background: none;
      border: none;
      /* font-size: 1.5rem; */
      color: var(--text-color-secondary);
      cursor: pointer;
      padding: 0;
      margin-left: 1rem;
    }

    .right-side {
      gap: 1rem;
    }

    .shop-btn {
      margin-left: 0.5rem;
    }

    .language {
      min-width: 2.5rem;
    }

    .dropdown {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }

    .dropbtn {
      width: 100%;
      text-align: left;
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: start;
      align-items: center;
    }

    .dropdown-content {
      position: static;
      display: none;
      box-shadow: none;
      padding-left: 1rem;
      width: 100%;
      background-color: transparent;
    }

    .dropdown.open .dropdown-content {
      display: block;
    }
    /* .nav-center {
      margin: 1rem 1rem;
      padding: 0;
    }

    .nav-center a,
    .nav-center NavLink,
    .dropbtn {
      font-size: 0.9rem;
    }

    .shop-btn {
      margin-left: 0.3rem;
      font-size: 1.7rem;
    } */
  }

  @media (max-width: 960px) {
    /* .logo-container img {
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

    .dropbtn {
      font-size: 0.8rem;
    }

    .language-dropdown {
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
    } */
  }

  @media (max-width: 768px) {
    height: 5rem;
    position: fixed;
    width: 100%;

    .logo-container img {
      height: 4rem;
    }

    .nav-center {
      position: fixed;
      top: 5rem;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: var(--bg-color);
      padding: 0.5rem 0;
      display: none;
      z-index: 1000;
      max-height: calc(100vh - 5rem); // Limit height to viewport minus header
      overflow-y: auto; // Allow scrolling if menu is too long
    }

    .nav-center.show-menu {
      display: flex;
      align-items: start;
    }

    .nav-center a,
    .nav-center NavLink {
      padding: 0.5rem 1rem;
      /* font-size: 1rem; */
    }

    .menu-toggle {
      display: block;
      background: none;
      border: none;
      /* font-size: 1.5rem; */
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
      /* font-size: 2rem; */
    }

    .language {
      /* font-size: 1.1rem; */
      min-width: 2.5rem;
    }

    .dropdown {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }

    .dropbtn {
      width: 100%;
      text-align: left;
      padding: 0.5rem 1rem;
      /* font-size: 1rem; */
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dropdown-content {
      position: static;
      display: none;
      box-shadow: none;
      padding-left: 1rem;
      width: 100%;
      background-color: transparent;
    }

    .dropdown.open .dropdown-content {
      display: block;
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

    .logo-container img {
      height: 3rem;
    }

    .right-side {
      gap: 0.25rem;
    }

    .shop-btn {
      /* font-size: 1.5rem; */
    }
  }
`;

export default Wrapper;
