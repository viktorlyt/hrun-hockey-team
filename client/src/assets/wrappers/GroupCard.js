import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 2rem;
  border: 1px solid var(--ocean-dark);
  padding-bottom: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    margin-bottom: 0.5rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10% 1rem 10%;
  }

  h3,
  h4,
  p {
    margin: 0;
  }

  h3 {
    color: var(--bg-color-card);
  }

  h4 {
    color: var(--text-color-b40-o);
    margin: 1rem 0;
  }

  .desc {
    width: 100%;
    margin-bottom: 1rem;
  }

  .registration {
    width: 100%;
    display: inline-block;
    margin: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Wrapper;
