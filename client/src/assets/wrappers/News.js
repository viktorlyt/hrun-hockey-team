import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 1rem;

  h1 {
    text-align: start;
    margin-bottom: 1rem;
    padding: 0 3rem;
  }

  .news-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 0 3rem;
  }

  .news-item {
    flex: 0 0 calc(50% - 0.75rem);
    display: flex;
  }

  @media (max-width: 768px) {
    .news-item {
      flex: 0 0 100%;
    }

    h3 {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
