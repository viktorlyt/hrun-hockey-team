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
    margin: 0;
    margin-bottom: 1rem;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .community-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    padding: 0;
    gap: 2rem;
    margin-bottom: 4rem;
    width: 100%;
  }

  .community-container .larger-font {
    margin: 0;
    width: 45%;
  }

  .community-images {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 4%;
  }

  .community-images img {
    width: 48%;
    aspect-ratio: 16 / 9; // Adjust this ratio as needed
  }

  .donations-container {
    display: flex;
    justify-content: space-between;
    padding: 0;
    width: 100%;
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
    /* aspect-ratio: 16 / 9;  */
  }

  .download {
    display: inline-block;
    padding: 1rem 2rem;
    text-align: left;
    margin-top: 1rem;
    margin-left: 0;
    margin-right: auto;
  }
`;

export default Wrapper;
