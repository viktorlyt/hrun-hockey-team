import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
  white-space: pre-line;

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 10px;
  }

  h2 {
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
  }

  p {
    margin: 0;
    text-align: start;
  }
`;
export default Wrapper;
