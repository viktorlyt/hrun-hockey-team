import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 8rem;
  margin-bottom: 2rem;

  h1 {
    text-align: start;
    margin-bottom: 1rem;
    padding: 0 3rem;
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
    justify-content: space-between;
    align-items: stretch;
    padding: 0 3rem;
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
    margin-top: auto;
  }

  .facts-container > div {
    flex-basis: calc(33.33% - 1rem);
  }

  .coaches-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    justify-items: start;
    padding: 0 3rem;
  }

  .join-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    justify-items: start;
    padding: 0 3rem;
  }
`;

export default Wrapper;
