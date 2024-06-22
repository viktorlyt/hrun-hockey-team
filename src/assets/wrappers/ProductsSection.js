import styled from "styled-components";

const Wrapper = styled.div`
  .products-section {
    padding: 2rem 4rem;
    text-align: left;
  }

  .products-section h2 {
    font-size: 2rem;
    color: var(--text-color);
    margin-bottom: 1rem;
  }

  .products-section p {
    color: var(--text-secondary-color);
    margin-top: 0;
  }

  .products-container {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .explore-all-btn {
    display: block;
    margin: 0 auto;
    background-color: var(--primary-500);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .explore-all-btn:hover {
    background-color: var(--primary-600);
  }
`;

export default Wrapper;
