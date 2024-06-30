import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 8rem;
  margin-bottom: 2rem;

  h1 {
    text-align: start;
    margin-top: 5rem;
    padding: 0 3rem;
    font-size: 2.5rem;
  }

  .product-section {
    display: flex;
    justify-items: start;
    align-items: start;
    gap: 6rem;
    margin: 5rem;
  }

  .product-category-filter {
    display: flex;
    flex-direction: column;
    justify-items: start;
    align-items: start;
    gap: 2rem;
    padding-top: 6rem;
    padding-left: 4rem;
    padding-right: 3rem;
    width: 10rem;
  }

  .product-category-filter > li {
    list-style: none;
    width: 100%;
    text-align: right;
    cursor: pointer;
  }

  .product-category-filter > li:hover,
  .category.selected {
    font-weight: bold;
  }

  .product-type-filter {
    display: flex;
    justify-items: start;
    align-items: start;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .product-type-filter .type {
    margin: 0;
    background-color: var(--text-secondary-color);
  }

  .product-type-filter > button:hover,
  .type.selected {
    background-color: var(--primary-600);
  }

  .clear-filters {
    margin-left: 3rem;
    background-color: var(--blue);
  }

  .larger-font {
    font-size: 1.2rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: var(--shadow-2);
  }

  .products-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    justify-items: start;
  }
`;

export default Wrapper;
