import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  margin: 0.5rem 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: start;
  align-items: start;

  img {
    width: 40vh;
    height: 40vh;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.2rem;
  }

  .larger-font {
    font-size: 1.1rem;
  }

  .price {
    font-size: 1.4rem;
  }

  @media (max-width: 1200px) {
    img {
      width: 30vh;
      height: 35vh;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: auto;
      aspect-ratio: 1 / 1;
    }
  }
`;

export default Wrapper;
