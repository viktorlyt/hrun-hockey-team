import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: var(--background-secondary-color);
  color: var(--secondary-color);
  padding: 2rem 4rem;
  width: 100%;
  box-sizing: border-box;
  --footer-height: 320px;
  min-height: var(--footer-height);
  display: flex;
  flex-direction: column;

  .footer-content {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
  }

  .footer-left {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    width: 25%;
    min-width: 250px;
    flex-shrink: 0;
  }

  .footer-branding {
    display: flex;
    flex-direction: column;
  }

  .footer-branding .logo-container img {
    height: auto;
    width: 100%;
    max-width: 150px;
    margin-bottom: 0.7rem;
  }

  .footer-socials {
    justify-content: left;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
  }

  .footer-center {
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    padding-left: 2rem;
  }

  .footer-sections {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .footer-sections section {
    flex: 1;
  }

  .footer-sections section > h3 {
    font-size: 1.2rem;
    margin-top: 0;
  }

  .footer-sections section > div {
    display: flex;
    flex-direction: column;
  }

  .footer-sections a {
    margin: 0.2rem 0;
  }

  .footer-sections a:hover {
    color: var(--primary-300);
  }

  .footer-copyright {
    margin-top: auto;
    width: 100%;
  }

  .created-by {
    text-align: center;
    padding: 0.5rem 0;
    background-color: var(--background-color);
  }

  .created-by a {
    font-weight: bold;
    color: var(--text-secondary-color);
  }

  .created-by a:hover {
    color: var(--brown-900);
  }

  @media (max-width: 1200px) {
    .footer-content {
      flex-wrap: wrap;
    }

    .footer-left {
      width: 100%;
      margin-bottom: 2rem;
      justify-content: space-between;
    }

    .footer-center {
      width: 100%;
      padding-left: 0;
    }

    .footer-sections {
      gap: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;

    .footer-left {
      flex-direction: column;
      align-items: center;
    }

    .footer-socials {
      justify-content: center;
    }
    .footer-sections {
      flex-direction: column;
      gap: 0.01rem;
    }

    .footer-sections section {
      width: 100%;
    }
  }
`;

export default Wrapper;
