import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    display: block; // removes space below the image
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
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

  .date-location {
    color: var(--text-color-blue);
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
