import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0.5rem 1rem;
  background-color: var(--text-color-transparent);
  border-radius: 10px;
  box-sizing: border-box;

  h3 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
export default Wrapper;
