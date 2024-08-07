import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 4rem;

  .page-title {
    text-align: start;
    margin: 0;
  }

  img {
    border-radius: 10px;
    width: 100%;
    object-fit: contain;
    padding: 0;
    margin: 0;
    align-self: center;
  }

  .history-container,
  .join-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .history-container {
    .text,
    img {
      flex: 1;
      width: 50%;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .milestones-desc {
    width: 50%;
  }

  .milestones-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .join-container {
    margin-top: 3rem;
  }

  .join-container .about,
  .join-container img {
    flex: 1;
    width: 50%;
  }

  .join-container h1 {
    margin: 0;
    margin-bottom: 2rem;
  }

  .join-container .about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .join-container .text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  .contact-us {
    display: inline-block;
    margin-top: 1rem;
    margin-left: 0;
    margin-right: auto;
  }

  @media (max-width: 1600px) {
    .milestones-desc {
      width: 65%;
    }
  }

  @media (max-width: 1400px) {
    .history-container {
      .text {
        flex: unset;
        width: 60%;
      }

      img {
        flex: unset;
        width: 40%;
      }
    }

    .milestones-desc {
      width: 80%;
    }

    .join-container h1 {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 1200px) {
    .history-container {
      flex-direction: column;
    }
    .history-container .text,
    .history-container img {
      flex: 1;
      width: 100%;
    }

    .milestones-container {
      gap: 1rem;
    }

    .join-container {
      flex-direction: column;
    }

    .join-container .about,
    .join-container img {
      flex: 1;
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    .history-container {
      flex-direction: column;
    }
    .history-container .text,
    .history-container img {
      flex: 1;
      width: 100%;
    }

    .milestones-desc {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    h1 {
      padding: 0;
    }

    .milestones-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 480px) {
  }
`;
export default Wrapper;
