import styled from "styled-components";

const Wrapper = styled.div`
  .home-page-section {
    padding: 2rem 4rem;
    text-align: left;
  }

  .home-page-section .section-title {
    margin-bottom: 1rem;
  }

  .home-page-section p {
    margin-top: 0;
  }

  .home-page-section-container {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .products .home-page-section-container,
  .news .home-page-section-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
  }

  .products .home-page-section-container > *,
  .news .home-page-section-container > * {
    width: calc(33.333% - 1.334rem);
    max-width: calc(33.333% - 1.334rem);
    min-width: 250px;
  }

  .section-title-container.updates {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .upcoming-match {
    box-shadow: var(--shadow);
    border: 0.5px solid var(--black-10);
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: start;
    padding: 1rem 3rem 0.5rem 3rem;
    gap: 2rem;
  }

  .upcoming-match h4 {
    margin: 0;
    margin-bottom: 0.7rem;
  }

  .upcoming-match .b4 {
    color: var(--text-color-light);
  }

  .time-left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
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
    padding-right: 0.6rem;
  }

  .time-left p {
    margin: 0;
  }

  .time-left.right-border {
    border-right: 1px solid var(--text-color-secondary);
  }

  .update-cards {
    display: flex;
    justify-content: space-between;
  }

  .products .section-title,
  .products .section-description {
    width: 100%;
    max-width: 430px;
  }

  .products .section-description {
    margin-top: 2rem;
  }

  .form-section {
    margin-bottom: 2rem;
    background-color: var(--blue-light);
    border: 1px solid var(--ocean);
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .form-info {
    width: 50%;
  }

  .form-info .content {
    width: 82%;
  }

  .form-info .section-title {
    width: 85%;
    margin-bottom: 2rem;
    margin-top: 0;
    color: #000;
  }

  .get-in-touch-message {
    margin-bottom: 2rem;
  }

  .address {
    margin-bottom: 3rem;
  }

  .icons-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #000;
    margin: 0.5rem 0;
  }

  .icons-info svg {
    flex-shrink: 0;
    width: 1em;
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
    text-decoration-color: var(--black-40);
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
    background-color: #fff;
    width: 100%;
    border: 1px solid var(--black-20);
    box-shadow: var(--shadow);
    border-radius: 20px;
    padding: 0.5rem 1rem;
    outline: none;
  }

  .form-input-container > textarea {
    min-height: 50px;
    border-radius: 30px;
    resize: vertical;
  }

  .form-row.checkbox {
    margin-top: 0.5rem;
  }

  .form-input-container.checkbox {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .form-input-container.checkbox input[type="checkbox"] {
    margin-top: 0.2rem;
    flex-shrink: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    border-color: var(--black-20);
    background-color: #fff;
    border-radius: 3px;
    width: 3px;
    aspect-ratio: 1/1;
    width: 14px;
    padding: 0;
  }

  .form-label {
    color: var(--black-40);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .checkbox-lbl {
    margin-top: 0;
    padding-top: 0;
    display: inline-flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .checkbox-label-content {
    display: flex;
  }

  .label-part-0 {
    flex: 0 0 auto;
  }

  .label-part-1 {
    flex: 0 0 auto;
  }

  .contact-us-btn {
    margin-top: 2rem;
    margin-left: 0;
  }

  @media (max-width: 1450px) {
    .update-cards {
      justify-content: center;
    }
  }

  @media (max-width: 1200px) {
    .home-page-section .section-title {
      width: 100%;
      margin-top: 0;
    }

    .home-page-section {
      padding: 2rem 2rem 0 2rem;
    }

    .products .section-title,
    .products .section-description {
      max-width: 100%;
      margin-top: 0;
    }

    .section-title-container {
      flex-direction: column;
      text-align: center;
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
    .home-page-section {
      text-align: left;
    }

    .products .home-page-section-container > *,
    .news .home-page-section-container > * {
      flex: 0 0 calc(50% - 1rem);
      max-width: calc(50% - 1rem);
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
      width: 94%;
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

    .update-cards {
      flex-direction: column;
    }

    .upcoming-match {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .teams {
      align-items: center;
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
      /* font-size: 0.7rem; */
    }
  }

  @media (max-width: 620px) {
    .products .home-page-section-container > *,
    .news .home-page-section-container > * {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .form-section {
      gap: 0;
    }
  }

  @media (max-width: 510px) {
    .home-page-section {
      padding: 1rem;
    }

    .form-section {
      padding: 1rem;
    }

    .upcoming-match {
      padding: 1rem 1rem 0.5rem 1rem;
    }
  }
`;

export default Wrapper;
