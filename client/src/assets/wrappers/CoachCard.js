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
  padding: 1rem;

  img {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
  }

  p {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-weight: bold;
    text-align: center;
  }

  @media (max-width: 768px) {
    img {
      max-height: 300px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-height: 200px;
    }
  }
`;
export default Wrapper;
