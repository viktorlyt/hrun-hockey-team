import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 4rem;

  h1 {
    text-align: start;
    margin-bottom: 1rem;
  }

  .b1 {
    margin: 1rem 0 1rem 0;
  }

  .team-container,
  .join-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 1.5rem;
  }

  .about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .facts-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    gap: 1.5rem;
  }

  .facts-container > div {
    flex-basis: calc(33%-1rem);
  }

  img {
    border-radius: 10px;
    width: 40%;
    height: auto;
    object-fit: contain;
  }

  .coaches-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    justify-items: center;
  }

  .join-container {
    margin-top: 2rem;
    align-items: flex-start;

    h1 {
      margin: 0;
    }

    .about {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    img {
      width: 50%;
    }

    .contact-us {
      display: inline-block;
      margin-top: 1rem;
      margin-left: 0;
    }
  }

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 1024px) {
    .team-container,
    .join-container {
      flex-direction: column;

      img {
        width: 100%;
      }
    }

    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .facts-container > div {
      flex-basis: calc(50% - 2rem);
    }
  }

  @media (max-width: 510px) {
    padding: 0 1rem;

    .facts-container > div {
      flex-basis: 100%;
    }

    .coaches-container {
      grid-template-columns: 1fr;

      .b1 {
        line-height: 24px;
        margin: 0;
      }
    }
  }
`;
export default Wrapper;
