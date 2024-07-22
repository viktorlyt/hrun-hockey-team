import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 0rem;

  .dropdown-label {
    font-size: 1rem;
  }

  .dropdown-input-container {
    position: relative;
    width: 100%;
  }

  .custom-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0;
    border: 1px solid var(--grey-200);
    border-radius: 0.5rem;
    background: transparent;
    cursor: pointer;
  }

  .selected-value {
    padding: 0 2rem;
  }

  .dropdown-icon-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .dropdown-icon {
    display: flex;
    font-size: 2rem;
    color: var(--text-color);
  }

  .dropdown-icon-container::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    width: 1px;
    background-color: var(--text-color-transparent-secondary);
  }

  .options-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid var(--text-color-transparent-secondary);
    border-top: none;
    border-radius: 0 0 0.5rem 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
  }

  .options-list li {
    padding: 0.6rem 1.5rem;
    cursor: pointer;
  }

  .options-list li:hover,
  .options-list li.selected {
    background-color: var(--text-color-transparent-secondary);
  }

  .date-picker-container {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid var(--text-color-transparent-secondary);
    border-top: none;
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 0.5rem;
    z-index: 10;
  }

  .date-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--grey-200);
    border-radius: 0.25rem;
  }
`;

export default Wrapper;
