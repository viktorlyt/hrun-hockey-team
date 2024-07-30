import styled from "styled-components";

const Wrapper = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 3rem;
  padding: 0;
  border-bottom: 1px solid var(--black-20);

  li {
    position: relative;
    cursor: pointer;
    padding: 0 1rem 0.5rem 1rem;
    transition: color 0.3s ease;
    color: var(--text-color-secondary);
  }

  li::after {
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

  li:hover,
  li.active {
    font-weight: bold;
  }

  li:hover::after,
  li.active::after {
    transform: scaleX(1);
  }

  li.active::after {
    height: 3px;
  }
`;

export default Wrapper;
