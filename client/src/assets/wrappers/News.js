import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 4rem;

  h1 {
    text-align: start;
    margin-bottom: 1rem;
  }

  .news-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .news-container {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 510px) {
    padding: 0 1rem;
  }
`;

export default Wrapper;
