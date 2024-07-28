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
    min-width: 100%;
    object-fit: contain;
  }

  p {
    margin: 0;
  }

  .b1 {
    color: var(--text-color-blue);
    height: 50pt;
    text-align: center;
  }

  .b2 {
    font-family: "Inter";
    font-size: 18px;
    line-height: 22px;
    text-align: justify;
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
