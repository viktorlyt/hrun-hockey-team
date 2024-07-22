import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 8rem;
  margin-bottom: 2rem;

  h1 {
    text-align: start;
    margin-top: 3rem;
    padding: 0 1rem;
    font-size: 2.5rem;
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

  .team-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 1rem;
    gap: 1.5rem;
  }

  .about,
  .team-container > img {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .about {
    justify-content: space-between;
  }

  .facts-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    gap: 1rem;
    margin-top: 1rem;
  }

  .facts-container > div {
    flex-basis: calc(33.33% - 1rem);
  }

  .coaches-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    justify-items: center;
    padding: 0 1rem;
  }

  .join-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .join-container .about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-us {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: var(--text-color);
    color: var(--background-color);
    text-align: left;
    margin-top: 1rem;
    margin-left: 0;
    margin-right: auto;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 1.6rem;
    }

    .larger-font {
      font-size: 1.3rem;
    }

    .team-container {
      gap: 1rem;
    }

    .facts-container {
      gap: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    .team-container {
      flex-direction: row;
    }

    .join-container {
      grid-template-columns: repeat(2, 1fr);
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

    .facts-container > div {
      flex-basis: calc(50% - 0.5rem);
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

    .facts-container > div {
      flex-basis: 100%;
    }

    .coaches-container {
      grid-template-columns: 1fr;
    }
  }
`;
export default Wrapper;
