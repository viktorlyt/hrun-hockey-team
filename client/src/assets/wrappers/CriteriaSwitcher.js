import styled from "styled-components";

const Wrapper = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  /* width: fit-content; */
  gap: 3rem;
  padding: 0;
  border-bottom: 1px solid var(--text-color-transparent-secondary);

  li:hover,
  li.active {
    color: var(--primary-500);
    text-decoration: underline;
    font-weight: bold;
  }

  li {
  }
`;

export default Wrapper;
