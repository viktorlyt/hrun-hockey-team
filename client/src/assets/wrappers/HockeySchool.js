import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 8rem;
  margin: 2rem 4rem;

  h1,
  p {
    width: 50%;
  }

  h1 {
    text-align: start;
    margin-top: 3rem;
    /* font-size: 2.5rem; */
  }

  .larger-font {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }

  /* .groups {
    display: flex;
    justify-content: start;
    align-items: stretch;
    padding: 0;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    width: 100%;
  } */

  .groups {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-around;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    width: 100%;
  }

  /* .content-container .larger-font {
    width: 45%;
  } */

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
    background-color: var(--text-color-transparent-secondary);
    border-radius: 1rem;
    width: fit-content;
  }

  .schedule-table th,
  .schedule-table td {
    border-collapse: collapse;
    padding: 1rem 1rem;
    text-align: center;
  }

  .schedule-table th {
    color: var(--text-color);
  }

  @media (max-width: 1600px) {
    .groups {
      gap: 1.5rem;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1400px) {
    .groups {
      /* gap: 1.5rem; */
      grid-template-columns: repeat(3, 1fr);
    }

    h1,
    p {
      width: 70%;
    }
  }

  @media (max-width: 1200px) {
    margin: 0rem 3rem;

    h1 {
      font-size: 1.8rem;
      margin-top: 1rem;
    }

    .larger-font {
      font-size: 1rem;
    }

    .groups {
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 1024px) {
    .schedule-table {
      font-size: 0.9rem;
    }

    .schedule-table th,
    .schedule-table td {
      padding: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      margin-top: 0;
    }

    .larger-font {
      font-size: 0.9rem;
    }

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

    .schedule-table {
      font-size: 0.7rem;
    }

    .schedule-table td {
      padding: 0.3rem 0;
    }
  }
`;

export default Wrapper;
