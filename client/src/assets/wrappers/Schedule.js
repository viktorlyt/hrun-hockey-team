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
    gap: 0.2rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
    border-radius: 3rem;
    color: var(--text-secondary-color);
    background-color: var(--text-color-transparent);
  }

  .arrow {
    font-size: 1.8rem;
    cursor: pointer;
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

  .calendar-day {
    aspect-ratio: 1/1;
    background-color: var(--background-secondary-color);
    border-radius: var(--border-radius);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    box-shadow: var(--shadow-1);
    overflow: hidden;
    position: relative;

    &:hover {
      box-shadow: var(--shadow-3);
    }

    &.has-event {
      background-color: var(--blue);
      color: white;

      &:hover {
        background-color: var(--primary-500);
      }

      .day-number {
        color: white;
      }

      .event-time {
        color: var(--background-color);
      }
    }
  }

  .next-month {
    opacity: 0.5;
  }

  .day-number {
    font-weight: bold;
    color: var(--text-color);
    position: absolute;
    top: 1rem;
    left: 1.5rem;
  }

  .event-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .event {
    transition: all 0.3s ease-in-out;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
    height: 100%;
  }

  .event-teams-logo,
  .event-teams-names {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .team-logo {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
    background-color: white;
  }

  .event-time {
    font-size: 0.8rem;
    color: var(--text-color);
    text-align: center;
    margin-top: 0.25rem;
  }

  @media (max-width: 1024px) {
    .calendar-grid,
    .weekday-header {
      grid-template-columns: repeat(4, 1fr);
    }
    .weekday-name:nth-child(n + 5) {
      display: none;
    }
    .calendar-day {
      aspect-ratio: auto;
      min-height: 100px;
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

  @media (max-width: 480px) {
    .calendar-grid,
    .weekday-header {
      grid-template-columns: 1fr;
    }
    .weekday-name:nth-child(n + 2) {
      display: none;
    }
  }
`;

export default Wrapper;

//   .event-teams-logo {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.5rem;
//     margin-bottom: 0.25rem;
//   }

//   .event-teams-names {
//     font-weight: bold;
//     font-size: 0.7rem;
//     margin-bottom: 0.25rem;
//   }

//   .team-logo {
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     object-fit: cover;
//     background-color: white;
//   }

//   .event-time {
//     font-size: 0.7rem;
//     color: var(--text-color);
//   }
