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
    props.isHomePage ? "var(--color-gb-bd)" : "var(--bg-color)"};
  color: ${(props) =>
    props.isHomePage ? "var(--color-od-gb)" : "var(--color-b-gb)"};
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
    padding: 0;

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
          props.isHomePage ? "var(--color-gb-bd)" : "var(--bg-color)"};
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        min-width: 100px;
        z-index: 1001; // Increased z-index to be above the header
        display: none;
        margin-top: 0;

        a {
          color: ${(props) =>
            props.isHomePage ? "var(--color-od-gb)" : "var(--color-b-gb)"};
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          white-space: nowrap;

          &:hover {
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
      color: var(--color-od-gb);
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
      margin: 1rem 3rem;
    }

    .right-side {
      gap: 1rem;

      .icons-section {
        gap: 1rem;
      }
    }
  }

  @media (max-width: 1450px) {
    .nav-center {
      margin: 1rem 2rem;
    }

    .right-side {
      gap: 0.5rem;

      .icons-section {
        gap: 0.5rem;
      }
    }
  }

  @media (max-width: 1343px) {
    padding: 0.5rem 2rem;

    .left-side {
      height: 100%;
    }

    .nav-center {
      margin: 0.5rem;
      a,
      NavLink {
        padding: 0.5rem 0.3rem;
      }
    }

    .right-side {
      gap: 0;

      .icons-section {
        gap: 0;

        .user-btn {
          font-size: 1.7rem;
        }

        .cart-btn {
          font-size: 2.5rem;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    height: 6rem;
    /* height: 5rem; */
    position: fixed;
    width: 100%;

    .left-side {
      height: 150%;

      .menu-toggle {
        display: block;
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0;
        margin-left: 1rem;
      }
    }

    .nav-center {
      position: fixed;
      top: 5rem;
      left: 7rem;
      right: 1rem;
      flex-direction: column;
      background-color: ${(props) =>
        props.isHomePage ? "var(--color-gb-bd)" : "var(--bg-color)"};
      padding: 1rem;
      display: none;
      z-index: 99;
      max-height: calc(100vh - 7rem);
      overflow-y: auto;

      &.show-menu {
        display: flex;
        align-items: start;
      }

      a,
      NavLink {
        padding: 0.7rem 1rem;
      }

      .dropdown {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;

        &.open .dropdown-content {
          display: block;
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
      }
    }

    .right-side {
      gap: 2rem;

      .icons-section {
        gap: 2rem;
      }
    }
  }

  @media (max-width: 960px) {
  }

  @media (max-width: 768px) {
    .logo-container img {
      height: 4rem;
    }

    .nav-center {
      left: 1rem;
      padding: 0.5rem 0;
      max-height: 100vh;
    }

    .right-side {
      gap: 0.7rem;

      .icons-section {
        gap: 0.7rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;

    .logo-container img {
      height: 3rem;
    }

    .right-side {
      gap: 0.5rem;

      .icons-section {
        gap: 0.5rem;
      }
    }
  }
`;

export default Wrapper;
