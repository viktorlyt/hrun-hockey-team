import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 1rem;

  .filters-container {
    display: flex;
    justify-items: start;
    align-items: center;
    gap: 2.7rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .filters-container .filter {
    margin: 0;
  }

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
    font-size: 2rem;
    font-weight: bold;
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
  }

  .link-icon {
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    height: 100%;
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
    .filters-container {
      gap: 1rem;
    }
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
    .dropdown-label,
    .dropdown-input-container {
      font-size: 0.9rem;
    }

    .dropdown-icon {
      font-size: 1.4rem;
    }

    .selected-value {
      padding: 0 1rem;
    }
  }

  @media (max-width: 768px) {
    .filters-container {
      flex-direction: column;
      justify-items: center;
      align-items: stretch;
      margin-bottom: 1rem;
    }

    .dropdown-label,
    .dropdown-input-container {
      font-size: 1rem;
    }
    .dropdown-icon {
      font-size: 2rem;
    }

    .selected-value {
      padding: 0 2rem;
    }
  }

  @media (max-width: 510px) {
  }
`;

export default Wrapper;
