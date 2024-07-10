import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 8rem;
  margin: 2rem 3rem;

  .calendar-container {
    padding: 2rem;
  }

  .calendar-header-container {
    width: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0.5rem;
    margin-bottom: 2rem;
    border-radius: 3rem;
    color: var(--text-secondary-color);
    background-color: var(--text-color-transparent);
  }

  .calendar-footer-container {
    width: fit-content;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  .left,
  .right {
    /* height: min-content; */
    height: 3rem;
    width: 8rem;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 1rem;
    border-radius: 3rem;
    color: var(--text-secondary-color);
    background-color: var(--text-color-transparent);
    cursor: pointer;

    &.disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  .right {
    justify-content: right;
  }

  .react-datepicker__input-container input {
    background-color: transparent;
    border: none;
    color: var(--text-secondary-color);
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }

  .react-datepicker__month-container {
    background-color: var(--background-secondary-color);
  }

  .react-datepicker__header {
    background-color: var(--primary-500);
  }

  .react-datepicker__current-month {
    color: var(--text-color);
  }

  .react-datepicker__month {
    background-color: var(--background-secondary-color);
  }

  .react-datepicker__month-wrapper {
    margin: 0;
  }

  .react-datepicker__month-text {
    width: 3rem;
  }

  .react-datepicker__day {
    color: var(--text-color);
    padding: 0;
  }

  .react-datepicker__day:hover {
    /* background-color: var(--primary-500); */
  }

  .react-datepicker__day--selected {
    background-color: var(--primary-500);
  }

  .react-datepicker__navigation {
    outline: none;
  }

  .react-datepicker__navigation--previous {
    left: 10px;
  }

  .react-datepicker__navigation--next {
    right: 10px;
  }

  .react-datepicker__navigation-icon::before {
    border-color: var(--text-color);
  }

  .react-datepicker__navigation--previous--disabled,
  .react-datepicker__navigation--next--disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .arrow {
    font-size: 1.8rem;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &.disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  .weekday-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1rem;
    margin-bottom: 0.5rem;
  }

  .weekday-name {
    text-align: center;
    font-weight: bold;
    color: var(--text-color);
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1rem;
  }

  @media (max-width: 1600px) {
    .weekday-header {
      display: none;
    }

    .weekday-label {
      display: inline;
      font-size: 0.8rem;
      color: var(--text-secondary-color);
      padding-right: 1rem;
    }

    .calendar-grid,
    .weekday-header {
      grid-template-columns: repeat(5, 1fr);
    }

    .weekday-name:nth-child(n + 6) {
      display: none;
    }
  }

  @media (max-width: 1400px) {
    .calendar-grid,
    .weekday-header {
      grid-template-columns: repeat(4, 1fr);
    }
    .weekday-name:nth-child(n + 5) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    .calendar-grid,
    .weekday-header {
      grid-template-columns: repeat(3, 1fr);
    }
    .weekday-name:nth-child(n + 4) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .calendar-grid,
    .weekday-header {
      grid-template-columns: repeat(2, 1fr);
    }
    .weekday-name:nth-child(n + 3) {
      display: none;
    }
  }

  @media (max-width: 510px) {
    .calendar-grid,
    .weekday-header {
      grid-template-columns: 1fr;
    }
    .weekday-name:nth-child(n + 2) {
      display: none;
    }

    .calendar-footer-container {
      padding-left: 0.5rem;
      font-size: 0.85rem;
      justify-content: center;
    }
  }
`;

export default Wrapper;
