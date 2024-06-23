import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  width: calc(33.333% - 1.46rem);
  margin-bottom: 2rem;
  background-color: var(--background-color);
  border-radius: 10px;
  box-shadow: var(--shadow-2);
  overflow: hidden;
  transition: transform 0.3s ease;
  border: 1px solid var(--text-color);

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

  .update-results {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 3rem;
  }
`;

export default Wrapper;
