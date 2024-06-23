import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomePageSections";

const ContactFormSection = () => {
  return (
    <Wrapper>
      <div className="home-page-section">
        <div className="form-info"></div>
        <form action="">
          <button type="submit">Contact us</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactFormSection;
