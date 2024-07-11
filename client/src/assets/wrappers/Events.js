import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 8rem;
  margin: 2rem 4rem;

  h1,
  p {
    width: 50%;
  }

  h1 {
    text-align: start;
    margin-top: 3rem;
    /* font-size: 2.5rem; */
  }

  .larger-font {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
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

  @media (max-width: 1600px) {
    .events {
      gap: 1.5rem;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1400px) {
    .events {
      /* gap: 1.5rem; */
      grid-template-columns: repeat(3, 1fr);
    }

    h1,
    p {
      width: 70%;
    }
  }

  @media (max-width: 1200px) {
    margin: 0rem 3rem;

    h1 {
      font-size: 1.8rem;
      margin-top: 1rem;
    }

    .larger-font {
      font-size: 1rem;
    }

    .events {
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 1024px) {
    h1,
    p {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      margin-top: 0;
    }

    .larger-font {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    .events {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Wrapper;
