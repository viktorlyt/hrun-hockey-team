import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .news-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    justify-items: start;
    padding: 0 3rem;
  }
`;

export default Wrapper;
