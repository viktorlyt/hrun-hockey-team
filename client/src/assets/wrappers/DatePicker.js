import styled from "styled-components";

const Wrapper = styled.div`
  .datepicker-container {
    margin-bottom: 1rem;
  }

  .datepicker-label {
    display: block;
    font-size: 1rem;
  }

  .datepicker-input-container {
    position: relative;
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

  .datepicker-icon-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .datepicker-icon {
    display: flex;
    font-size: 2rem;
    color: var(--text-color);
  }

  .datepicker-icon-container::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    width: 1px;
    background-color: var(--text-color-transparent-secondary);
  }

  .datepicker-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    background: white;
    border: 1px solid var(--grey-200);
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  .react-datepicker {
    font-family: inherit;
    border: none;
  }

  .react-datepicker__header {
    background-color: var(--primary-500);
    color: white;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: white;
  }

  .react-datepicker__day--selected {
    background-color: var(--primary-500);
  }
`;

export default Wrapper;
