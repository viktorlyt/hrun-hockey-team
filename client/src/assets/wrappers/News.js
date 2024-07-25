import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    text-align: start;
    margin-bottom: 1rem;
    padding: 0 3rem;
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
