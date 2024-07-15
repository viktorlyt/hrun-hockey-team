import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch; // Changed from 'start' to 'stretch'
  box-sizing: border-box;
  gap: 2rem;
  padding: 1rem;
  height: 100%; // Added to ensure the wrapper takes full height of its container

  img {
    border-radius: 50%;
  }

  .player-container {
    flex: 1;
    max-width: calc(37% - 1rem); // 1/3 width minus half of the gap
    height: 370px;
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start; // Changed from center to flex-start
    align-items: center; */
    overflow: hidden;
    position: relative; // For absolute positioning of child elements
  }

  .player-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  .player-info.active {
    opacity: 1;
  }

  h2 {
    font-weight: bold;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .player-image {
    width: 120px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  .details {
    display: flex;
    flex-direction: row;
    color: var(--text-secondary-color);
    margin-top: 1rem;
  }

  .team-logo {
    width: 30px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.5rem;
  }

  .result-name {
    color: var(--text-secondary-color);
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
  }

  .players-list {
    flex: 2;
    max-width: calc(62% - 1rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 0;
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
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    border: 1px solid var(--text-color-transparent-secondary);
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

  @media (max-width: 768px) {
    img {
      max-height: 300px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-height: 200px;
    }
  }
`;

export default Wrapper;
