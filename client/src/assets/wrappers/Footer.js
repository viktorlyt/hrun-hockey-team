import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: var(--bg-color-ocean);
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
    margin-right: 2rem;
  }

  .footer-branding .logo-container img {
    width: 200px;
  }

  .footer-socials {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 3rem;
    color: var(--text-color-ocean-green);
  }

  .footer-socials a {
    font-size: 2.5rem;
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

  .footer-sections section > h4 {
    margin-top: 0;
  }

  .footer-sections section > div {
    display: flex;
    flex-direction: column;
  }

  .footer-sections a {
    margin: 0.5rem 0;
  }

  .footer-sections a:hover {
    color: var(--primary);
  }

  .footer-copyright {
    margin-top: auto;
    width: 100%;
  }

  .created-by {
    text-align: center;
    padding: 0.5rem 0;
    background-color: var(--bg-color);
  }

  .created-by a {
    font-weight: bold;
    color: var(--text-color-secondary);
  }

  .created-by a:hover {
    color: var(--text-color-blue);
  }

  @media (max-width: 1400px) {
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

  @media (max-width: 1343px) {
    padding: 1rem;

    .footer-left {
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem;
    .b1 {
      font-size: calc(var(--b1-font-size) * 0.75);
      line-height: calc(var(--b1-line-height) * 0.75);
    }

    .b3 {
      font-size: calc(var(--b3-font-size) * 0.75);
      line-height: calc(var(--b3-line-height) * 0.75);
    }

    .b4 {
      font-size: calc(var(--b4-font-size) * 0.75);
      line-height: calc(var(--b4-line-height) * 0.75);
    }

    h4 {
      font-size: calc(var(--h4-font-size) * 0.75);
      line-height: calc(var(--h4-line-height) * 0.75);
    }

    .footer-copyright {
      margin-top: 2rem;
    }
  }

  @media (max-width: 500px) {
    padding: 1rem;

    .b1 {
      font-size: calc(var(--b1-font-size) * 0.6);
      line-height: calc(var(--b1-line-height) * 0.6);
    }

    .b3 {
      font-size: calc(var(--b3-font-size) * 0.6);
      line-height: calc(var(--b3-line-height) * 0.6);
    }

    .b4 {
      font-size: calc(var(--b4-font-size) * 0.7);
      line-height: calc(var(--b4-line-height) * 0.7);
    }

    h4 {
      font-size: calc(var(--h4-font-size) * 0.7);
      line-height: calc(var(--h4-line-height) * 0.7);
    }
  }
`;

export default Wrapper;
