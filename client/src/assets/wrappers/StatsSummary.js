import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1rem;

  h2 {
    margin-bottom: 1rem;
    color: var(--color-b-bl);
  }

  .table-container {
    width: 100%;
    overflow-x: auto;
    margin-bottom: 1rem;
    background-color: var(--bg-color);

    /* For Firefox */
    /* @supports (scrollbar-width: thin) {
      scrollbar-width: thin;
      scrollbar-color: var(--color-b20-od) var(--black-10);
    } */

    /* For WebKit browsers (Chrome, Safari, etc.) */
    &::-webkit-scrollbar {
      height: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-b20-o);
      border: 3px solid var(--color-b10-od);
      border-radius: 15px;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-b10-od);
    }

    &::-webkit-scrollbar-button {
      background-color: var(--color-b10-od);
      color: #000;
      height: 25px;
      width: 30px;
    }

    &::-webkit-scrollbar-button:horizontal:start:decrement,
    &::-webkit-scrollbar-button:horizontal:end:increment {
      display: block;
    }

    &::-webkit-scrollbar-button:start:decrement {
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
    }

    &::-webkit-scrollbar-button:end:increment {
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
    }

    &::-webkit-scrollbar-button:horizontal:start:decrement {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -2 20 20'%3E%3Cpath stroke='%23000000' fill='none' stroke-width='2' d='M10 2l-6 6 6 6'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }

    &::-webkit-scrollbar-button:horizontal:end:increment {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -2 20 20'%3E%3Cpath stroke='%23000000' fill='none' stroke-width='2' d='M6 2l6 6-6 6'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .players-table {
    width: 100%;
    border-collapse: collapse;
    white-space: nowrap;
    color: var(--color-b-bl);
    background: var(--bg-color);
  }

  .players-table th,
  .players-table td {
    padding: 0.5rem;
    text-align: left;
    position: relative;
  }

  .players-table th {
    background-color: var(--green-blue);
    color: #000;
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
    background-color: var(--text-transperent);
  }

  .players-table th.no-data {
    height: 25px;
  }

  .players-table td.no-data {
    text-align: center;
  }

  .players-table tr:nth-child(even) {
    background-color: var(--color-b20-od);
    color: #000;
  }

  .players-table tr:hover {
    background-color: var(--text-transperent);
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
