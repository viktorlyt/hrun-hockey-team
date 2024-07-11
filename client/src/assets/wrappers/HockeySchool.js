import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 8rem;
  margin: 2rem 4rem;

  h1 {
    text-align: start;
    margin-top: 3rem;
    font-size: 2.5rem;
  }

  .larger-font {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }

  .groups {
    display: flex;
    justify-content: start;
    align-items: stretch;
    padding: 0;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    width: 100%;
  }

  .groups-container .larger-font {
    width: 45%;
  }

  .groups-images {
    display: flex;
    justify-content: space-between;
    gap: 4%;
  }

  .groups-images img {
    width: 48%;
    aspect-ratio: 16 / 9;
  }

  .donations-container {
    display: flex;
    justify-content: space-between;
    gap: 4%;
  }

  .donations-container .about {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .donations-container .image-container {
    flex: 1;
  }

  .donations-container .image-container img {
    width: 100%;
  }

  .download {
    display: inline-block;
    padding: 1rem 2rem;
    text-align: left;
    margin-top: 1rem;
    margin-left: 0;
    margin-right: auto;
  }

  @media (max-width: 1024px) {
    margin: 2rem 1rem;

    h1 {
      font-size: 2rem;
    }

    .larger-font {
      font-size: 1.2rem;
    }

    .community-container .larger-font {
      width: 100%;
    }

    .community-images {
      flex-direction: column;
      gap: 2rem;
    }

    .community-images img {
      width: 100%;
    }

    .donations-container {
      flex-direction: column;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem;

    h1 {
      font-size: 1.8rem;
    }

    .larger-font {
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
