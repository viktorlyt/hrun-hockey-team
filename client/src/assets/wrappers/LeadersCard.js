import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .player-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: stretch;
    box-sizing: border-box;
    gap: 1rem;
    height: 100%;

    img {
      border-radius: 50%;
    }

    .player-container {
      flex: 1;
      max-width: calc(42% - 0.5rem);
      height: 430px;
      position: relative;
      display: flex;
      flex-direction: column;

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
        /* justify-content: center; */
        justify-content: space-between;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;

        .first-part {
          display: flex;
          flex-direction: column;
          align-items: center;

          .player-image {
            width: 160px;
            aspect-ratio: 1/1;
            border-radius: 50%;
            object-fit: cover;
          }

          .name {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: stretch;
          }

          .name > h4 {
            margin: 0.5rem 0 1rem 0;
          }

          .details {
            display: flex;
            flex-direction: row;
            text-align: center;
            color: var(--text-secondary-color);
            margin-bottom: 3rem;
          }

          .team-logo {
            width: 35px;
            margin-right: 0.5rem;
          }
        }

        .second-part {
          display: flex;
          flex-direction: column;
          width: 100%;

          .result-name {
            color: var(--text-secondary-color);
            margin: 0;
            text-align: center;
            align-self: center;
          }

          h1.result-value {
            text-align: center;
            margin: 0;
            width: 100%;
            overflow-wrap: break-word;
          }
        }
      }

      .player-info.active {
        opacity: 1;
      }
    }

    ol {
      flex: 1;
      max-width: calc(58% - 0.5rem);
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-content: start;
      gap: 0.7rem;
      overflow-y: auto;
      width: 100%;
      padding: 0;
      margin: 0;
      min-height: 0;
      list-style: none;
      list-style-type: none;

      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin: 0;
        border-radius: 1rem;
        border: 1.5px solid var(--black-20);
        box-sizing: border-box;
        transition: background-color 0.3s ease, color 0.3s ease;
        cursor: pointer;
      }

      li:hover,
      li:active,
      li.selected {
        background-color: var(--text-color-blue);
        color: var(--bg-color);
        border: none;
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
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

    .details {
      flex-direction: row;
      align-items: center;
      margin-bottom: 0;
      white-space: wrap;
    }

    .team-logo {
      width: 25px;
      height: 25px;
    }

    .second-part {
      align-items: end;
      text-align: end;
    }

    .result-name {
    }

    h1.result-value {
      text-align: end;
    }
  }

  @media (max-width: 480px) {
  }
`;

export default Wrapper;
