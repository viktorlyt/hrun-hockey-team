import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 4rem;
  padding-top: 8rem;
  margin-bottom: 2rem;

  .page-title {
    text-align: start;
    margin-top: 3rem;
  }

  .larger-font {
    font-size: 1.6rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .history-container,
  .join-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .history-container .text,
  .history-container img {
    flex: 1;
    width: 50%;
  }

  .history-container .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .milestones-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  /* .join-container {
    display: grid;
    grid-template-columns: 2fr;
    gap: 1.5rem;
  } */

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
    padding: 1rem 4rem;
    text-align: left;
    margin-top: 1rem;
    margin-left: 0;
    margin-right: auto;
  }

  @media (max-width: 1600px) {
    .milestones-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 1400px) {
    h1 {
      font-size: 1.6rem;
    }

    .larger-font {
      font-size: 1.3rem;
    }

    .join-container h1 {
      margin-bottom: 1rem;
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

    .join-container {
      flex-direction: column;
    }

    .join-container .about,
    .join-container img {
      flex: 1;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      padding: 0;
    }

    .larger-font {
      font-size: 1.2rem;
    }

    .milestones-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 480px) {
    padding-top: 6rem;

    h1 {
      font-size: 1.6rem;
    }

    .larger-font {
      font-size: 1.1rem;
    }
  }
`;
export default Wrapper;
