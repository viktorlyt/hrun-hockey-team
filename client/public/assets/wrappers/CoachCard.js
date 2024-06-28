import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  gap: 0.2rem;

  img {
    height: 400px;
    width: auto;
  }

  p {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-weight: bold;
  }
`;

export default Wrapper;
