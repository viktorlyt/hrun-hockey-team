import styled from "styled-components";

const Wrapper = styled.div`
  .breadcrumb {
    margin: 3rem 0;
    color: var(--black-40);
    /* border: none; */

    a {
      color: var(--black-40);
      text-decoration: none;
      margin: 0 0.5rem;

      &:first-child {
        margin-left: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      margin-left: 0.5rem;
      color: var(--text-secondary);
    }
  }
`;

export default Wrapper;
