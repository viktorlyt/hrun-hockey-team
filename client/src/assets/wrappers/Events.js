import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 4rem;

  /* h1,
  p {
    width: 50%;
  } */

  h1 {
    text-align: start;
    margin-top: 3rem;
  }

  .events {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-around;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    width: 100%;
  }

  @media (max-width: 1200px) {
    h1 {
      margin-top: 2rem;
    }

    .events {
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 1024px) {
    padding: 0 2rem;

    h1,
    p {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    .events {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Wrapper;
