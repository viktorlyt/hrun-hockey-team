import styled from "styled-components";

const Wrapper = styled.div`
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

    &.has-game {
      background-color: var(--blue);
      color: white;

      &:hover {
        background-color: var(--primary-500);
      }

      .day-number {
        color: white;
      }

      .game-time {
        color: white;
      }
    }
  }

  .weekday-label {
    display: none;
  }

  .day-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
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

  .game-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .game {
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

  .game-teams-logo,
  .game-teams-names {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .team-logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    background-color: white;
  }

  .game-time {
    font-size: 0.8rem;
    color: var(--text-color);
    text-align: center;
    margin-top: 0.25rem;
  }

  @media (max-width: 1600px) {
    .day-number {
      position: static;
    }

    .calendar-day {
      min-height: 100px;
    }
  }

  @media (max-width: 510px) {
    .calendar-day {
      height: 170px;
      margin: 0 1rem 0 auto;
    }
  }
`;

export default Wrapper;
