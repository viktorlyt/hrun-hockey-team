import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 8rem;
  margin-bottom: 2rem;

  h1 {
    text-align: start;
    margin-bottom: 1rem;
    padding: 0 3rem;
  }

  .breadcrumb {
    padding: 0 3rem;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    color: var(--text-secondary-color);
  }

  .breadcrumb a {
    color: var(--text-secondary-color);
    text-decoration: none;
    margin: 0 0.5rem;
  }

  .breadcrumb a:first-child {
    margin-left: 0;
  }

  .breadcrumb a:hover {
    text-decoration: underline;
  }

  .breadcrumb span {
    margin-left: 0.5rem;
    color: var(--text-color);
  }

  .product-container {
    display: flex;
    justify-items: start;
    align-items: start;
    gap: 2rem;
    margin: 5rem;
    margin-left: 3rem;
  }

  .images-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 1rem;
    margin-right: 2rem;
  }

  .image-preview-container {
    width: 11rem;
    height: 11rem;
    padding: 2px;
    box-sizing: border-box;
  }

  .image-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: var(--shadow-2);
    cursor: pointer;
    transition: border 0.3s ease;
  }

  .image-preview.selected {
    border: 2px solid var(--primary-500);
  }

  .chosen-image {
    width: 100%;
    height: auto;
    max-height: 33rem;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: var(--shadow-2);
  }

  h5,
  h3 {
    margin: 0;
  }

  h5 {
    margin-top: 0.3rem;
  }

  .details-section {
    color: var(--text-secondary-color);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--grey-200);
  }

  .colors-container,
  .sizes-container {
    display: flex;
    gap: 1.5rem;
  }

  .color-option {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--grey-200);
    transition: transform 0.2s;
  }

  .color-option:hover {
    transform: scale(1.1);
  }

  .color-option.selected {
    border-color: var(--primary-500);
  }

  .checkmark {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .size {
    padding: 0.5rem 1rem;
    border: 1px solid var(--text-secondary-color);
    background-color: transparent;
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0rem;
  }

  .size:hover {
    background-color: var(--text-secondary-color);
    color: var(--background-color);
  }

  .size.selected {
    background-color: var(--text-color-blue);
    color: var(--background-color);
    border-color: var(--text-color-blue);
  }

  .add-to-cart-section {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .quantity-selector {
    display: flex;
    align-items: center;
    border: 1px solid var(--text-secondary-color);
    border-radius: 1.2rem;
    overflow: hidden;
  }

  .quantity-selector button {
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 0 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1.7rem;
    outline: none;
    user-select: none;
  }

  .quantity-selector button:hover {
    font-weight: bold;
  }

  .quantity-selector input {
    width: 3rem;
    text-align: center;
    border: none;
    /* border-left: 1px solid var(--text-secondary-color);
    border-right: 1px solid var(--text-secondary-color); */
    padding: 0.5rem 1rem;
    /* -moz-appearance: textfield; */
  }

  .quantity-selector input::-webkit-outer-spin-button,
  .quantity-selector input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .quantity-selector button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .max-quantity-reached {
    color: var(--primary-500);
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .add-to-cart {
    padding: 0.5rem 4rem;
  }

  .add-to-cart:hover {
    background-color: var(--primary-700);
  }

  .left-side,
  .right-side {
    display: flex;
    flex-direction: column;
  }

  .more-details {
    font-size: 0.8rem;
    padding-top: 2rem;
  }
`;

export default Wrapper;
