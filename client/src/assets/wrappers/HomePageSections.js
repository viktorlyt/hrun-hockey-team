import styled from "styled-components";

const Wrapper = styled.div`
  .home-page-section {
    padding: 2rem 4rem;
    text-align: left;
  }

  .home-page-section .section-title {
    font-size: 2rem;
    color: var(--text-color);
    margin-bottom: 1rem;
    width: 15%;
  }

  .home-page-section p {
    color: var(--text-secondary-color);
    margin-top: 0;
  }

  .home-page-section-container {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .section-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .upcoming-match {
    border: 2px solid var(--grey-300);
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: start;
    padding: 1rem 2rem;
    gap: 2rem;
  }

  .teams,
  .time-left {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }

  .time-left {
    align-items: center;
  }

  .time-left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .form-section {
    margin-bottom: 2rem;
    background-color: var(--background-color);
    border-radius: 10px;
    box-shadow: var(--shadow-2);
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }

  .form-info {
    width: 40%;
  }

  .form-info .content {
    width: 72%;
  }

  .form-info .section-title {
    width: 85%;
  }

  .get-in-touch-message {
    margin-bottom: 3rem;
  }

  .icons-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icons-info svg {
    flex-shrink: 0; // Prevents the icon from shrinking
    width: 1em; // Makes the icon size relative to the text size
    height: 1em;
  }

  /* .address {
    white-space: "pre-line";
  } */

  .form {
    max-width: 60%;
    width: 60%;
  }

  .form-row {
    margin-bottom: 0rem;
    margin-top: 1.5rem;
    width: 90%;
  }

  .underlined-text {
    text-decoration-color: var(--grey-400);
    text-decoration-thickness: 2px;
  }

  .form-row.textarea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .form-row.textarea .form-label {
    margin-bottom: 0.5rem;
    padding-bottom: 0;
  }

  .form-input-container {
    width: 100%;
  }

  .form-input-container > input,
  .form-input-container > textarea {
    width: 100%;
    border: 1px solid var(--grey-300);
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  }

  .form-input-container > textarea {
    min-height: 100px; // Adjust this value to make the textarea higher
    resize: vertical; // Allows user to resize vertically
  }

  .form-row.checkbox {
    margin-top: 0.5rem;
  }

  .form-input-container.checkbox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .form-input-container.checkbox input[type="checkbox"] {
    width: auto;
    margin-top: 0.2rem; // Align checkbox with the first line of text
  }

  .form-label {
    color: var(--grey-500);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .checkbox-lbl {
    margin-top: 0;
    font-size: 0.8rem;
    padding-top: 0;
    display: inline-flex;
    align-items: flex-start;
    line-height: 1.2;
  }

  .checkbox-label-content {
    display: flex;
    flex-wrap: wrap;
  }

  .label-part-0 {
    flex: 0 0 auto;
  }

  .label-part-1 {
    flex: 0 0 auto;
  }

  .contact-us-btn {
    margin-top: 1rem;
  }

  @media (max-width: 1200px) {
    .home-page-section .section-title {
      width: 100%;
      text-align: center;
    }

    .home-page-section {
      padding: 2rem;
    }

    .form-section {
      padding: 2rem 3rem;
    }

    .form {
      width: 80%;
      max-width: 100%;
      padding: 0;
    }
  }

  @media (max-width: 900px) {
    .section-title-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .form-section {
      padding: 2rem 4rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }

    .form-info,
    .form {
      width: 70%;
    }

    .form-info .content {
      width: 100%;
    }

    .form {
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    .home-page-section {
      padding: 2rem;
    }

    .home-page-section-container {
      flex-direction: column;
    }

    .upcoming-match {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .form {
      width: 100%;
      margin: 1rem 1rem;
      padding: 0.5rem;
    }

    .form {
      margin-top: 1rem;
    }

    .form-row {
      margin-top: 1rem;
    }

    .checkbox-lbl {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 510px) {
    .home-page-section {
      padding: 1rem;
    }

    .home-page-section .section-title {
      font-size: 1.5rem;
    }

    .form-section {
      padding: 1rem;
    }
  }
`;

export default Wrapper;
