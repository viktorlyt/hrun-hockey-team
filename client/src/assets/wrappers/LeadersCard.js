import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  box-sizing: border-box;
  gap: 4rem;
  padding: 1rem;

  img {
    border-radius: 50%;
  }

  .player-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* color: var(--text-color-transparent-secondary); */
  }

  h2 {
    font-weight: bold;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .player-image {
    width: 100px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  .details {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    color: var(--text-secondary-color);
    margin-top: 1rem;
  }

  .team-logo {
    width: 30px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
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
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
  }

  ol {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  li {
    width: 300px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--text-color-transparent-secondary);
  }

  li:hover,
  li:active {
    border: none;
    background-color: var(--blue);
    color: var(--background-color);
  }

  button {
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
