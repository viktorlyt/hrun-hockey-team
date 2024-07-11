import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 2rem;
  border: 1px solid var(--text-color-transparent-secondary);
  padding-bottom: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 2rem;
    margin-bottom: 0.5rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    gap: 1rem;
  }

  h3,
  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .price {
    font-size: 0.9rem;
  }

  .buy-passes {
    display: inline-block;
    margin: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Wrapper;
