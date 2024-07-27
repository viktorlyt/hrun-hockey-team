import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%; // Add this to make the card take full height

  .card-content {
    flex: 1; // This will make the content area grow to fill available space
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin-bottom: 1rem;
    flex: 1;
  }

  .image-container {
    position: relative;
    width: 100%;
    flex-shrink: 0; // Prevent the image from shrinking
  }

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 0.5rem;
  }

  .date-overlay {
    position: absolute;
    bottom: 1.5rem;
    left: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    color: #000;
    background-color: var(--transparent-white-6);
    border: 1px solid var(--black-60);
  }

  p {
    margin-bottom: 1rem;
    flex: 1; // This will make the paragraph grow to fill available space
  }

  .button-container {
    margin-top: auto; // This pushes the button to the bottom
  }

  .read-more {
    display: inline-block;
    margin: 0;
  }
`;

export default Wrapper;
