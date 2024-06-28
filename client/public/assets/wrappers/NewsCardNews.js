import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0.5rem 0;
  max-width: 100%;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  img {
    width: 44vw;
    height: 25vw;
    object-fit: cover; /* Crop image if it's larger */
    border-radius: 10px;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export default Wrapper;
