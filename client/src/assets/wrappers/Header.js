import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: ${(props) =>
    props.isHomePage ? "var(--bg-color-dark)" : "var(--bg-color)"};
  color: ${(props) =>
    props.isHomePage ? "var(--text-color-o-gb)" : "var(--text-color-black-gb)"};
  box-sizing: border-box;
  max-width: 100%;

  .left-side {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 150%;

    .logo-container {
      height: 100%;
      display: flex;
      align-items: center;

      img {
        width: auto;
        max-width: none;
        object-fit: contain;
      }
    }

    .menu-toggle {
      display: none;
      outline: none;
    }
  }

  .nav-center {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 8rem;

    a:hover,
    .nav-center NavLink:hover,
    .active-link {
      color: var(--primary);
    }

    NavLink,
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

      &:hover .dropdown-content {
        display: block;
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

        &:hover {
          color: var(--primary);
        }

        &.active-link {
          color: var(--primary);
        }
      }

      .dropdown-content {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: ${(props) =>
          props.isHomePage ? "var(--bg-color-dark)" : "var(--bg-color)"};
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        min-width: 100px;
        z-index: 1001; // Increased z-index to be above the header
        display: none;
        margin-top: 0;

        a {
          color: ${(props) =>
            props.isHomePage
              ? "var(--text-color-o-gb)"
              : "var(--text-color-black-gb)"};
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          white-space: nowrap;

          &:hover {
            /* background-color: var(--grey-20); */
            color: var(--primary);
          }
        }

        .active-link {
          color: var(--primary);
        }
      }
    }
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .icons-section {
      color: var(--text-color-o-gb);
      display: flex;
      align-items: center;
      gap: 1.5rem;

      .user-btn {
        font-size: 1.7rem;
      }

      .cart-btn {
        font-size: 2.5rem;

        .cart-icon-wrapper {
          position: relative;
          display: inline-block;

          .cart-item-count {
            position: absolute;
            top: -2px;
            right: 0;
            background-color: var(--primary);
            color: #fff;
            border-radius: 50%;
            font-size: 0.7rem;
            width: 18px;
            height: 18px;
            text-align: center;
            line-height: 18px; /* Match the height */
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
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

    .cart-btn {
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
  }

  @media (max-width: 960px) {
  }

  @media (max-width: 768px) {
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
    }

    .menu-toggle {
      display: block;
      background: none;
      border: none;
      color: var(--text-color);
      cursor: pointer;
      padding: 0;
      margin-left: 1rem;
    }

    .right-side {
      gap: 1rem;
    }

    .cart-btn {
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

    .cart-btn {
    }
  }
`;

export default Wrapper;
