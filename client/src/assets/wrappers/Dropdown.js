import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 0rem;

  .dropdown-label {
    color: var(--color-b40-gb);
  }
  .dropdown-input-container {
    position: relative;
    width: 100%;
    color: var(--color-b60-bl);
  }

  .custom-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0;
    border: 1px solid var(--black-10);
    box-shadow: var(--shadow);
    border-radius: 1rem;
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
    font-size: 2.5rem;
    color: var(--color-b70-bl);
  }

  .dropdown-icon-container::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    width: 1px;
    background-color: var(--black-40);
  }

  .options-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--bg-primary);
    border: 1px solid var(--black-10);
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
    background-color: var(--bg-ocean);
  }

  .date-picker-container {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid var(--black-10);
    border-top: none;
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 0.5rem;
    z-index: 10;
  }

  .date-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--black-20);
    border-radius: 0.25rem;
  }
`;

export default Wrapper;
