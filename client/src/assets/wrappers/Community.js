import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 4rem;

  h1 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  img {
    border-radius: 10px;
    object-fit: contain;
  }

  .community-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0;
    margin-bottom: 6rem;

    .b1 {
      width: 50%;
    }

    .community-images {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2rem;

      img {
        width: calc(50% - 1rem);
        max-width: 100%;
        height: auto;
        /* object-fit: cover; */
      }
    }
  }

  .donations-container {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .about {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;

      h1 {
        margin: 0;
      }

      .download {
        display: inline-block;
        margin: 0;
      }
    }

    .image-container {
      flex: 1;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1450px) {
    .community-container {
      .community-images {
        justify-content: center;

        img {
          width: calc(50% - 1rem);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 0 2rem;

    .community-container {
      margin-bottom: 3rem;

      .b1 {
        width: 100%;
      }
      .community-images {
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .community-images img {
      width: 100%;
    }

    .donations-container {
      flex-direction: column;
      .b1 {
        text-align: justify;
      }
    }

    .donations-container .about h4 {
      margin: 0;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 510px) {
    padding: 0 1rem;
  }
`;

export default Wrapper;
