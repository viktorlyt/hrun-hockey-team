import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  background-color: var(--blue-light);
  border: 1px solid var(--ocean);
  border-radius: 20px;
  padding: 1rem 7rem;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .update-header > p {
    text-align: center;
  }

  .update-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .update-header h3 {
    margin-bottom: 1rem;
  }

  h3,
  h4 {
    color: #000;
    text-align: center;
  }

  .update-results {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 3rem;
  }

  .league {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 1850px) {
    padding: 1rem 5rem;
  }

  @media (max-width: 1650px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 1450px) {
    padding: 1rem 7rem;
  }

  @media (max-width: 1260px) {
    padding: 1rem 4rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem 8rem;
  }

  @media (max-width: 768px) {
    padding: 0 3rem;

    .update-results {
      gap: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .update-header > p {
    }

    .update-results {
      gap: 1rem;
    }
  }
`;

export default Wrapper;
