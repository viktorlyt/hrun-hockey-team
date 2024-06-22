import styled from "styled-components";

const Wrapper = styled.div`
  .home-page-section {
    padding: 2rem 4rem;
    text-align: left;
  }

  .home-page-section h2 {
    font-size: 2rem;
    color: var(--text-color);
    margin-bottom: 1rem;
    width: 15%;
  }

  .home-page-section p {
    color: var(--text-secondary-color);
    margin-top: 0;
  }

  .home-page-section-container {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .section-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .upcoming-match {
    border: 2px solid var(--grey-300);
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: start;
    padding: 1rem 2rem;
    gap: 2rem;
  }

  .teams,
  .time-left {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }

  .time-left {
    align-items: center;
  }

  .time-left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export default Wrapper;
