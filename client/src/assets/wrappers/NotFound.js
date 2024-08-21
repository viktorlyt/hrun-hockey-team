import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .not-found-container {
    text-align: center;
    max-width: 600px;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin-bottom: 2rem;
  }

  .button {
    color: #fff;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    .link-button {
      padding: 0.5rem 1rem;
    }
  }
`;

export default Wrapper;
