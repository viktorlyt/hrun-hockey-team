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
`;

export default Wrapper;
