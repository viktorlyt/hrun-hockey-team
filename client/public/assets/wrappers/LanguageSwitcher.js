import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  .dropdown {
    display: flex;
    align-items: center;
    background-color: transparent;
  }

  .language {
    min-width: 2.5rem;
    text-align: center;
  }

  .arrow {
    margin-left: 1px;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-menu div {
    padding: 7px 15px;
    cursor: pointer;
  }

  .dropdown-menu div:hover {
    background-color: #f1f1f1;
  }
`;

export default Wrapper;
