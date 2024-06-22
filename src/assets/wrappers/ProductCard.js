import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  width: calc(33.333% - 1.334rem);
  margin-bottom: 2rem;
  background-color: var(--background-color);
  border-radius: 10px;
  box-shadow: var(--shadow-2);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .image-container {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .container {
    padding: 1rem;
    text-align: left;
  }

  h5 {
    margin: 0.5rem 0;
    color: var(--text-color);
  }

  h5:first-child {
    font-size: 1.2rem;
    color: var(--primary-500);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 768px) {
    .products-section {
      padding: 2rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default Wrapper;
