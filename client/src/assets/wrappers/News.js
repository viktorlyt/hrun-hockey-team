import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 1rem;

  h1 {
    text-align: start;
    margin-bottom: 1rem;
    padding: 0 3rem;
  }

  .news-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    .news-container {
      grid-template-columns: 1fr;
    }

    .news-container,
    h3 {
      padding: 0 1rem;
    }
  }
`;

export default Wrapper;
