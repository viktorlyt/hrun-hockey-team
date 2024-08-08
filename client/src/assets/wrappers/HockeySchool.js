import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 4rem;

  h1,
  p {
    width: 50%;
  }

  h1 {
    text-align: start;
    margin-top: 3rem;
  }

  .groups {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    width: 100%;
  }

  .groups-images {
    display: flex;
    justify-content: space-between;
    gap: 4%;
  }

  .groups-images img {
    width: 48%;
    aspect-ratio: 16 / 9;
  }

  .table-container {
    width: 100%;
    overflow-x: auto;
  }

  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    background-color: var(--bg-color-odg);
    border-radius: 1.2rem;
    width: fit-content;
  }

  .schedule-table th,
  .schedule-table td {
    border-collapse: collapse;
    padding: 1rem 1rem;
    text-align: center;
    color: var(--bg-color-card);
  }

  .schedule-table td {
  }

  .group-day-header {
    color: var(--text-color-grey-o);
  }

  .group-name-header {
    margin: 0;
  }

  @media (max-width: 1600px) {
    .groups {
      gap: 1.5rem;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1400px) {
    .groups {
      grid-template-columns: repeat(2, 1fr);
    }

    h1,
    p {
      width: 70%;
    }
  }

  @media (max-width: 1200px) {
    padding: 0 2rem;

    h1 {
      margin-top: 2rem;
    }
  }

  @media (max-width: 1024px) {
    .schedule-table th,
    .schedule-table td {
      padding: 0.5rem;
    }

    .groups {
      gap: 1rem;
    }

    h1,
    p {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    .schedule-table {
      font-size: 0.8rem;
    }

    .schedule-table th,
    .schedule-table td {
      padding: 0.3rem;
    }
  }

  @media (max-width: 600px) {
    .groups {
      grid-template-columns: repeat(1, 1fr);
    }

    .schedule-table td {
      padding: 0.3rem 0;
    }
  }
`;

export default Wrapper;
