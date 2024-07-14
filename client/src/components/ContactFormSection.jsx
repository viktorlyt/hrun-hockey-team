import { useState } from "react";
import { Link } from "react-router-dom";
import { LuPhone, LuMail, LuPen } from "react-icons/lu";
import Wrapper from "../assets/wrappers/HomePageSections";
import { useTeam } from "../context/TeamContext";
import FormRow from "./FormRow";

const ContactFormSection = () => {
  const { teamName, address, phone, email } = useTeam();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agreeWithDataCollection: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Wrapper>
      <div className="home-page-section">
        <div className="form-section">
          <div className="form-info">
            <div className="content">
              {/* <h2 className="section-title">How can we help you today?</h2> */}
              <h2 className="section-title">Get in touch</h2>
              <p className="get-in-touch-message">
                We value your feedback, questions, and inquiries. Whether you
                have a suggestion, require assistance, or just want to reach out
                to us, we are always here to provide support and assistance.
              </p>
              <p className="icons-info">
                <LuPhone /> <b>{phone}</b>
              </p>
              <p className="icons-info">
                <LuMail /> <b>{email}</b>
              </p>
              <p className="address" style={{ whiteSpace: "pre-line" }}>
                {address}
              </p>
            </div>
          </div>
          <form className="form">
            <FormRow
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <FormRow
              type="text"
              name="phone"
              isRequired={false}
              value={formData.phone}
              onChange={handleInputChange}
            />
            <FormRow
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormRow
              type="textarea"
              name="message"
              isLabeled={true}
              labelIcon={<LuPen />}
              // labelText="How can our team help you?"
              labelText="How we can help you? Feel free to get in touch!"
              isPlaceholder={false}
              value={formData.message}
              onChange={handleInputChange}
            />
            <FormRow
              type="checkbox"
              name="agreeWithDataCollection"
              isLabeled
              labelText="I agree that my data can be collected and stored."
              value={formData.agreeWithDataCollection}
              onChange={handleInputChange}
            />

            <button type="submit" className="contact-us-btn">
              {/* Contact us */}
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactFormSection;
