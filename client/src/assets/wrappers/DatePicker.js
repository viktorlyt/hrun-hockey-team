import styled from "styled-components";

const Wrapper = styled.div`
  .datepicker-container {
    margin-bottom: 1rem;
  }

  .datepicker-label {
    display: block;
    color: var(--black-40);
  }

  .datepicker-input-container {
    position: relative;
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

  .datepicker-icon-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .datepicker-icon {
    display: flex;
    font-size: 2.5rem;
    color: var(--color-black);
  }

  .datepicker-icon-container::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    width: 1px;
    background-color: var(--black-40);
  }

  .datepicker-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    background-color: var(--bg-primary);
    border: 1px solid var(--black-20);
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  .react-datepicker {
    font-family: inherit;
    border: none;
  }

  .react-datepicker__header {
    background-color: var(--bg-ocean);
    padding: 0;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: var(--text-secondary);
  }

  .react-datepicker__day--selected {
    background-color: var(--primary);
  }
`;

export default Wrapper;
