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
    /* background-color: var(--text-secondary-color); */
  }

  .filters-container > button:hover,
  .type.selected {
    /* background-color: var(--primary-600); */
  }

  .players-container {
    display: flex;
    flex-direction: row;
    align-items: start;
    /* justify-content: space-between; */
    gap: 3rem;
  }

  .custom-link {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
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
    margin-top: 0.15em; /* Fine-tune vertical alignment */
  }
`;

export default Wrapper;
