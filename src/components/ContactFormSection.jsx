import React from "react";
import { Link } from "react-router-dom";
import { LuPhone, LuMail, LuPen } from "react-icons/lu";
import Wrapper from "../assets/wrappers/HomePageSections";
import { useTeam } from "../context/TeamContext";
import FormRow from "./FormRow";

const ContactFormSection = () => {
  const { teamName, address, phone, email } = useTeam();

  return (
    <Wrapper>
      <div className="home-page-section">
        <div className="form-section">
          <div className="form-info">
            <div className="content">
              <h2 className="section-title">How can we help you today?</h2>
              <p>
                Feel free to message us and we will get back to you as soon as
                possible.
              </p>
              <p style={{ whiteSpace: "pre-line" }}>{address}</p>
              <p className="icons-info">
                <LuPhone /> {phone}
              </p>
              <p className="icons-info">
                {" "}
                <LuMail /> {email}
              </p>
            </div>
          </div>
          <form className="form">
            <FormRow type="text" name="name" defaultValue="John Smith" />
            <FormRow
              type="text"
              name="phone"
              defaultValue="5061234567"
              isRequired={false}
            />
            <FormRow type="email" name="email" defaultValue="john@gmail.com" />
            <FormRow
              type="textarea"
              name="message"
              isLabeled={true}
              labelIcon=<LuPen />
              labelText="How can our team help you?"
              isPlaceholder={false}
            />
            <FormRow
              type="checkbox"
              defaultValue={false}
              name="agreeWithDataCollection"
              isLabeled
              labelText="I agree that my data collected and stored."
            />

            <button type="submit">Contact us</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactFormSection;
