import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 2rem;
  border: 1px solid var(--text-color);
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
  }

  h3 {
  }

  h4 {
  }

  .desc {
    width: 70%;
  }

  .registration {
    display: inline-block;
    margin: 0;
    width: 70%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Wrapper;
