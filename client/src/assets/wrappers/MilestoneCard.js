import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  p {
    margin: 0;
    padding: 0 1rem 1rem;
    text-align: center;
  }

  h2 {
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
  }
`;
export default Wrapper;
