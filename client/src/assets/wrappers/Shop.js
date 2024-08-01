import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 4rem;

  h1 {
    text-align: start;
    margin-top: 2rem;
    padding: 0 1rem;
  }

  .product-section {
    display: flex;
    justify-items: start;
    align-items: start;
    gap: 6rem;
    margin: 5rem 2rem 5rem 6rem;
  }

  .product-category-filter {
    display: flex;
    flex-direction: column;
    justify-items: start;
    align-items: start;
    gap: 4rem;
    margin-top: 6rem;
    margin-left: 4rem;
    margin-right: 3rem;
    width: 10rem;
  }

  .product-category-filter > h3 {
    width: 100%;
    text-align: right;
    align-self: right;
    cursor: pointer;
    color: var(--text-color);
    margin: 0;
  }

  .product-category-filter > h3:hover,
  .category.selected {
    font-weight: bold;
    color: var(--text-color-secondary);
  }

  .product-type-filter {
    display: flex;
    justify-items: start;
    align-items: center;
    gap: 2.7rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .product-type-filter .type {
    margin: 0;
  }

  .clear-filters {
    margin-left: 3rem;
    background-color: var(--blue);
  }

  img {
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

  @media (max-width: 1600px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 1200px) {
    .home-page-section {
      padding: 0;
    }

    .product-section {
      gap: 5rem;
      margin: 3rem 0;
    }

    .product-category-filter {
      gap: 4rem;
      margin-left: 1rem;
      margin-right: 0;
      width: unset;
    }

    .product-type-filter {
      margin-bottom: 2rem;
      justify-content: space-between;
      gap: 0.2rem;
    }

    .clear-filters {
      align-self: right;
      margin: 0;
    }
  }

  @media (max-width: 992px) {
    padding: 0 2rem;

    .product-section {
      gap: 3rem;
    }
  }

  @media (max-width: 768px) {
    .product-section {
      flex-direction: column;
      margin: 1.5rem;
      align-items: center;
    }

    .product-category-filter {
      margin: 0;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1rem 1rem 0 1rem;
      width: 100%;
      gap: 3rem;
    }

    .product-type-filter {
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 600px) {
    .product-section {
      margin: 1rem;
      gap: 0.5rem;
    }

    .product-category-filter {
      padding: 1rem 0.5rem;
      gap: 0;
    }

    .product-type-filter {
      flex-direction: column;
    }

    .product-type-filter .type {
      width: 100%;
    }

    .clear-filters {
      margin: 0;
      width: 100%;
    }

    .products-container {
      display: unset;
    }

    .products-container > * {
      margin-bottom: 2rem;
    }
  }
`;

export default Wrapper;
