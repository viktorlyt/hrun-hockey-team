import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    text-align: start;
    margin-top: 5rem;
    padding: 0 3rem;
    font-size: 2.5rem;
  }

  h2 {
    text-align: center;
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

  /* .product-type-filter {
    display: flex;
    justify-items: start;
    align-items: start;
    gap: 3rem;
    margin-bottom: 3rem;
  } */

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
    .product-type-filter {
      justify-content: space-between;
      gap: 0.2rem;
    }

    .clear-filters {
      margin-top: 1rem;
      width: 50%;
      margin-left: 0;
    }
  }

  @media (max-width: 992px) {
    .product-category-filter {
      padding-left: 2rem;
      padding-right: 1rem;
    }

    .product-section {
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .product-section {
      flex-direction: column;
      margin: 2rem;
      align-items: center;
    }

    .product-category-filter {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 1rem 1rem 0 1rem;
      width: 100%;
      gap: 3rem;
    }

    .product-category-filter > li {
      width: auto;
      text-align: center;
      padding: 0.2rem 1rem;
      border: 1px solid var(--primary-500);
      border-radius: 20px;
    }

    .product-type-filter {
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .clear-filters {
      margin-left: 0;
      margin-top: 1rem;
    }

    .products-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 500px) {
    .product-section {
      margin: 1rem;
      gap: 0.5rem;
    }

    .product-category-filter {
      padding: 1rem 0.5rem 0 0.5rem;
      gap: 0;
    }

    .product-category-filter > li {
      padding: 0.2rem 0.5rem;
      margin: 1rem;
    }

    .product-type-filter {
      justify-items: center;
      align-items: start;
      gap: 1.2rem;
    }
  }
`;

export default Wrapper;
