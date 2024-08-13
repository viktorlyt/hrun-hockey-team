import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  .home-page-switch {
  }

  .switch {
    position: relative;
    display: inline-block;
    /* width: 75px; */
    width: 96px;
    height: 36px;
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
    background-color: var(--bg-secondary);
    border: 1px solid var(--color-od-gb);
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 27px;
    width: 27px;
    left: 4px;
    bottom: 3px;
    /* background-color: var(--bg-secondary-color); */
    background-color: var(--color-od-gb);
    border: 1px solid var(--color-od-gb);
    box-sizing: border-box; // Include border in element's dimensions
    transition: 0.4s;
    z-index: 2;
  }

  input:checked + .slider:before {
    transform: translateX(61px);
  }

  .slider.round {
    border-radius: 40px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .switch-text {
    color: var(--color-od-gb);
    /* font-size: 12px;
    font-weight: bold; */
    z-index: 1;
    transition: 0.4s;
  }

  input:not(:checked) + .slider .switch-text {
    transform: translateX(28px); // Move "Home" text to the right
  }

  input:checked + .slider .switch-text {
    transform: translateX(3px); // Move "Away" text to the left
  }

  @media (max-width: 1450px) {
    margin-left: 0.5rem;
  }

  /* @media (max-width: 1200px) {
    .switch {
      width: 60px;
      height: 28px;
    }

    .slider:before {
      height: 22px;
      width: 22px;
    }

    input:checked + .slider:before {
      transform: translateX(32px);
    }

    input:not(:checked) + .slider .switch-text {
      transform: translateX(22px);
    }
  }

  @media (max-width: 768px) {
    margin-left: 0.5rem;

    .switch {
      width: 60px;
      height: 28px;
    }

    .slider:before {
      height: 22px;
      width: 22px;
    }

    input:checked + .slider:before {
      transform: translateX(32px);
    }

    .switch-text {
      font-size: 10px;
    }
  }

  @media (max-width: 480px) {
    margin-left: 0.3rem;

    .switch {
      width: 50px;
      height: 24px;
    }

    .slider:before {
      height: 18px;
      width: 18px;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }

    .switch-text {
      font-size: 9px;
    }
  } */
`;

export default Wrapper;
