import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch; // Changed from 'start' to 'stretch'
  box-sizing: border-box;
  gap: 1rem;
  padding: 1rem;
  height: 100%; // Added to ensure the wrapper takes full height of its container

  img {
    border-radius: 50%;
  }

  .player-container {
    flex: 1;
    max-width: calc(42% - 0.5rem);
    min-height: 410px;
    overflow: hidden;
    position: relative; // For absolute positioning of child elements

    display: flex; // Add this
    flex-direction: column; // Add this
  }

  .player-info {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  .player-info.active {
    opacity: 1;
  }

  .player-image {
    width: 120px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
  }

  .first-part {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .second-part {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
  }

  .name > h2 {
    margin: 0%;
  }

  .details {
    display: flex;
    flex-direction: row;
    color: var(--text-secondary-color);
    margin-bottom: 3rem;
  }

  .team-logo {
    width: 30px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.5rem;
    display: inline-block;
  }

  .result-name {
    color: var(--text-secondary-color);
    padding: 0;
    margin: 0;
    text-align: center;
  }

  h1.result-value {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    width: 100%;
    overflow-wrap: break-word;
  }

  .players-list {
    flex: 2;
    max-width: calc(58% - 0.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ol {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    flex: 1;
    overflow-y: auto;
    width: 100%;
    padding-left: 0;
    margin-bottom: 1rem;

    min-height: 0;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    border: 1px solid var(--grey-200);
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: pointer;
  }

  li:hover,
  li:active,
  li.selected {
    background-color: var(--blue);
    color: var(--background-color);
    border: none;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  @media (max-width: 1600px) {
    .player-container {
      max-width: calc(52% - 0.5rem);
    }
    .players-list {
      max-width: calc(48% - 0.5rem);
    }
  }

  @media (max-width: 1600px) {
    .player-container {
      max-width: calc(60% - 0.5rem);
    }
    .players-list {
      max-width: calc(40% - 0.5rem);
    }
  }

  @media (max-width: 1200px) {
    .player-container {
      max-width: calc(45% - 0.5rem);
    }
    .players-list {
      flex: 2;
      max-width: calc(55% - 0.5rem);
    }
  }

  @media (max-width: 943px) {
    .player-container {
      max-width: calc(60% - 0.5rem);
    }
    .players-list {
      max-width: calc(40% - 0.5rem);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
    gap: 0rem;

    .player-container,
    .players-list {
      max-width: 100%;
      height: auto;
      min-height: 50px;
    }

    .player-info {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .first-part {
      flex-direction: row;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
    }

    .player-image {
      width: 50px;
    }

    .name {
      flex-direction: row;
      gap: 0.5rem;
    }

    .name > h2 {
      font-size: 1.1rem;
    }

    .details {
      flex-direction: row;
      align-items: center;
      margin-bottom: 0;
      font-size: 0.8rem;
      white-space: nowrap;
    }

    .team-logo {
      width: 25px;
      height: 25px;
    }

    .second-part {
      /* justify-content: end; */
      align-items: end;
      text-align: end;
    }

    .result-name {
    }

    h1.result-value {
      font-size: 2rem;
      font-weight: bold;
      text-align: end;
    }
  }

  @media (max-width: 480px) {
  }
`;

export default Wrapper;
