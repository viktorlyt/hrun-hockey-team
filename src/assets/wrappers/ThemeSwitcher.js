import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  .switch {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;
    background-color: var(--background-color);
  }

  .slider:before {
    position: absolute;
    content: "Home";
    height: 32px;
    width: 52px;
    left: 4px;
    bottom: 4px;
    background-color: var(--text-color);
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.8rem;
    color: var(--background-color);
  }

  input:checked + .slider:before {
    transform: translateX(18px);
    content: "Away";
  }

  .slider.round {
    border-radius: 50px;
  }

  .slider.round:before {
    border-radius: 50px;
  }
`;

export default Wrapper;
