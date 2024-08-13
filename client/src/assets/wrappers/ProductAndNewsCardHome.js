import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }

  .image-container {
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
  .product-name,
  .news-title {
    color: var(--text-secondary);
    padding-top: 1rem;
    margin-bottom: 0.3rem;
    text-align: left;
  }

  .price {
    text-align: left;
  }

  .date-overlay {
    position: absolute;
    display: inline-block;
    bottom: 1rem;
    left: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    color: #000;
    background-color: var(--transparent-white-6);
    border: 1px solid var(--black-60);
  }

  @media (max-width: 768px) {
    .container {
      padding: 0.5rem;
    }
  }
`;

export default Wrapper;
