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

  .logo-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .nav-center {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 1rem;
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    padding: 1rem 1rem;
  }

  a:hover {
    color: var(--primary-500);
    text-decoration: underline;
  }

  .active-link {
    font-weight: 800;
    text-decoration: underline;
    color: var(--primary-500);
  }

  .shop-btn {
    margin-left: 1rem;
    font-size: 2.3rem;
  }
`;

export default Wrapper;
