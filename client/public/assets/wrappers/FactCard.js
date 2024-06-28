import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0.5rem 2rem;
  background-color: var(--text-color-transparent);
  border-radius: 10px;
  box-sizing: border-box;

  h3 {
    font-weight: bold;
  }

  h4 {
    font-weight: bold;
  }
`;

export default Wrapper;
