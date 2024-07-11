import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid var(--text-color);
  padding-bottom: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 2rem;
    margin-bottom: 0.5rem;
  }

  .info {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
  }

  h4 {
  }

  .desc {
    width: 80%;
  }

  .registration {
    display: inline-block;
    margin: 0;
    width: 80%;
  }
`;

export default Wrapper;
