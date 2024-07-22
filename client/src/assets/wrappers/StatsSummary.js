import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .table-container {
    width: 100%;
    overflow-x: auto;
    margin-bottom: 1rem;
  }

  .players-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .players-table th,
  .players-table td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid var(--grey-200);
    position: relative;
  }

  .players-table th {
    background-color: var(--primary-500);
    color: white;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s ease;
  }

  .players-table th:hover {
    opacity: 0.9;
  }

  .players-table .sorted-column {
    opacity: 0.8;
  }

  .players-table tbody .sorted-column {
    background-color: rgba(62, 157, 235, 0.1);
  }

  .players-table th.no-data {
    height: 25px;
  }

  .players-table td.no-data {
    text-align: center;
  }

  .players-table tr:nth-child(even) {
    background-color: var(--grey-50);
  }

  .players-table tr:hover {
    background-color: var(--grey-100);
  }

  .players-table th[title],
  .players-table td[title] {
    /* cursor: help; */
  }

  @media (max-width: 1600px) {
  }

  @media (max-width: 1450px) {
    .players-table {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1343px) {
  }

  @media (max-width: 1200px) {
    .players-table {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 960px) {
    overflow-x: auto;

    .players-table {
      min-width: 960px;
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 510px) {
  }
`;

export default Wrapper;
