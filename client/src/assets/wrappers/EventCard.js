import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    display: block; // removes space below the image
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom: 1px solid var(--ocean-dark);
    border-left: 1px solid var(--ocean-dark);
    border-right: 1px solid var(--ocean-dark);
    padding: 1rem;
  }

  h3,
  p {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
  }

  h3 {
    color: var(--color-b-bl);
  }

  .date-location {
    color: var(--ocean-dark);
  }

  .price {
    color: var(--color-b60-od);
  }

  .buy-passes {
    display: inline-block;
    margin: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Wrapper;
