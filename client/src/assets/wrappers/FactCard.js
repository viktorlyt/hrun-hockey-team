import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0 1.5rem;
  background-color: var(--blue-light);
  border: 1px solid var(--ocean);
  border-radius: 15px;
  box-sizing: border-box;

  h2 {
    color: var(--ocean);
    margin: 1rem 0;
  }

  h4 {
    margin: 0;
    color: #000;
  }

  .b2 {
    color: var(--black-60);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
export default Wrapper;
