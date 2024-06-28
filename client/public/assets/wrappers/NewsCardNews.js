import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0.5rem 0;
  max-width: 100%;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .image-container {
    position: relative;
    width: 100%;
  }

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 0.5rem;
  }

  .date-overlay {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background-color: var(--background-color-transparent);
    color: var(--text-color);
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 25px;
  }

  p {
    margin-bottom: 1rem;
  }

  .button-container {
    text-align: left;
  }

  .read-more {
    display: inline-block;
    margin: 0;
  }
`;

export default Wrapper;
