import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 1rem;

  .players-container {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 3rem;
  }

  .skaters-container,
  .goalies-container {
    flex: 1;
    min-width: 0; // This prevents flex items from overflowing
  }

  .custom-link {
    font-size: 2.6rem;
    color: var(--text-color-secondary);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
  }

  .link-text,
  .link-icon {
    display: flex;
    align-items: center;
    margin: 0;
    color: var(--bg-color-card);
  }

  .link-icon {
    margin-left: 1rem;
    display: flex;
    justify-content: center;
  }

  .link-icon svg {
    vertical-align: middle;
    margin-top: 0.15em;
  }

  @media (max-width: 1600px) {
  }

  @media (max-width: 1450px) {
  }

  @media (max-width: 1343px) {
  }

  @media (max-width: 1200px) {
    .players-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .skaters-container,
    .goalies-container {
      flex: 0;
      width: 100%; // This prevents flex items from overflowing
    }
  }

  @media (max-width: 960px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 510px) {
  }
`;

export default Wrapper;
