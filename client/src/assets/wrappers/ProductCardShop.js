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

  p,
  .b1,
  .b2 {
    margin: 0;
    margin-top: 0.5rem;
  }

  .product-name {
    color: var(--text-color-secondary);
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
